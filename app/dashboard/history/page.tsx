import React from 'react'
import Templates from '@/app/(data)/Templates'
import {Button} from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { currentUser } from '@clerk/nextjs/server'
import {desc, eq} from 'drizzle-orm'
import Image from 'next/image'
import { TEMPLATE } from '../_components/TemplateListSection'

export interface HISTORY{
    id:Number,
    formData:string,
    aiResponse:string,
    templateSlug:string,
    createdBy:string,
    createdAt:string
}

async function History() {

    const user = await currentUser();
    const result = await db.select().from(AIOutput) 
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(AIOutput.createdAt))
    const history: HISTORY[] = result as any


 return (
    <div className='p-5'>
        <h2 className='text-2xl font-medium'>History</h2>
        <div className='mt-5'>
            {history.map((item,index)=>(
                <div className='flex gap-3 p-3 border rounded-lg'>
                    <div className='flex gap-3'>
                        <Image src={Templates.find(template=>template.slug===item.templateSlug)?.icon} alt="icon" width={50} height={50}/>
                        <div>
                            <h2>{Templates.find(template=>template.slug===item.templateSlug)?.name}</h2>
                            <p>{item.createdAt}</p>
                        </div>
                    </div>
                    <div>
                        <Button variant={'secondary'}>View</Button>
                    </div>
                </div>
            ))}
        </div>
    </div>
 )
}

export default History