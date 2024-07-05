import React from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input' ;
import { Textarea } from '@/components/ui/textarea' ;
import { Button } from '@/components/ui/button' ;

interface PROPS{
  selectedTemplate?: TEMPLATE;
}
function FormSection({selectedTemplate}:PROPS) {
  return (
    <div className='p-5 shadow-md border rounded-lg'>
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt={selectedTemplate?.name} width={70} height={70}/>
      <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
      <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>
      <form>
        {selectedTemplate?.form?.map((item,index)=>(
            <div>
              <label>{item.label}</label>
              {item.field == 'input' ?
              <Input />
            : item.field == 'textarea' ?
              <Textarea /> : null
              }
            </div>
        ))}
        <Button>Generate Content</Button>
      </form>
    </div>
  )
}

export default FormSection