

export const BaseElements = [
    {
        text:'Text',
        label:'Text', //image label
        name:'input',
        widgetName:'input',
        schema:{
          title:'Text',
          type:'string'
        },
        settings:[
            {
                widgetName:'input',
                label:'Label',
            },
            {
                widgetName:'checkbox',
                label:'Verification'
            }
        ]
    },
    {
        text:'Checkbox',
        label:'Checkbox',
        name:'checkbox',
        widgetName:'checkbox',
        schema:{
          title:'是否选择',
          type:'boolean'
        },
        settings:[
            {
                widgetName:'input',
                label:'Label'
            }
        ],

    }
]
