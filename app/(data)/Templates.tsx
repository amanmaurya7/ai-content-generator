export default[
    {
        name:'Blog Title',
        desc:'An AI tool that generate blog title depends on your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on niche & outline topic and give me result in Rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter you blog niche',
                field:'input',
                name:'niche',
                required:true,
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',

            }
        ]

    },
    {
        name:'Blog Content',
        desc:'An AI tool that generate blog content depends on your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on niche & outline topic and give me result in Rich text editor format',
        slug:'blog-content-generation',
        form:[
            {
                label:'Enter you blog niche',
                field:'input',
                name:'niche',
                required:true,
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',

            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that generates blog topic ideas based on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'Give me 5 blog topic ideas in bullet points based on niche & outline topic and give me the result in Rich text editor format',
        slug: 'blog-topic-ideas',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
            name: 'Youtube SEO Title',
            desc: 'An AI tool that generates SEO-friendly titles for YouTube videos',
            category: 'Video',
            icon: 'https://cdn-icons-png.flaticon.com/128/174/174883.png',
            aiPrompt: 'Generate SEO-friendly titles for YouTube videos based on your video content',
            slug: 'youtube-seo-title',
            form: [
                {
                    label: 'Enter your video topic keywords',
                    field: 'input',
                    name: 'keywords',
                    required: true,
                },
                {
                    label: 'Enter youtube description outline here',
                    field: 'textarea',
                    name: 'outline',
                }
            ]
    },
    {
        name: 'Youtube Description',
        desc: 'An AI tool that generates descriptions for YouTube videos',
        category: 'Video',
        icon: 'https://cdn-icons-png.flaticon.com/128/174/174883.png',
        aiPrompt: 'Generate descriptions for YouTube videos based on your video content',
        slug: 'youtube-description',
        form: [
            {
                label: 'Enter your video topic keywords',
                field: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Enter youtube video outline here',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },

    {
        name: 'Youtube Tags',
        desc: 'An AI tool that generates tags for YouTube videos',
        category: 'Video',
        icon: 'https://cdn-icons-png.flaticon.com/128/174/174883.png',
        aiPrompt: 'Generate 10 tags for YouTube videos based on your video content',
        slug: 'youtube-tags',
        form: [
            {
                label: 'Enter your youtube title',
                field: 'input',
                name: 'keywords',
                required: true,
            },
            {
                label: 'Enter youtube video outline here',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },

    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that adds emojis to text',
        category: 'Text',
        icon: 'https://cdn-icons-png.flaticon.com/128/3250/3250212.png',
        aiPrompt: 'Add emojis to your text based on the content',
        slug: 'add-emojis-to-text',
        form: [
            {
                label: 'Enter your text',
                field: 'textarea',
                name: 'text',
                required: true,
            }
        ]
    },
    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'An AI tool that rewrites articles to ensure they are plagiarism-free',
        category: 'Text',
        icon: 'https://cdn-icons-png.flaticon.com/128/3250/3250212.png',
        aiPrompt: 'Rewrite your article to make it plagiarism-free',
        slug: 'rewrite-article',
        form: [
            {
                label: 'Provide your article',
                field: 'textarea',
                name: 'article',
                required: true,
            }
        ]
    },

    
   
]