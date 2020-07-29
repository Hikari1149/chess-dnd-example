

export const BaseElements = [
    {

        label:'Text', //image label
        widgetName:'input',
        formData:{
           label:'Name',
           value:'',
           placeholder:`Please Enter`
        },
        settings:[
            {
                formDataKey:'label',
                widgetName:'input',
                label:'Label',
                value:'Name'
            },
            {
                formDataKey:'placeholder',
                widgetName:'input',
                label:'Placeholder',
                value:'Please Enter'
            },
            {
                widgetName:'checkbox',
                title:'VERIFICATION',
                label:'Required',
            }
        ],
    },
    {
        label:'Checkbox',
        widgetName:'checkbox',
        settings:[
            {
                widgetName:'input',
                label:'Label'
            }
        ],
    },
    {
      label:'Radio',
      widgetName:'radio',
      settings:[
        {
          widgetName:'input',
          label:'Label'
        }
      ],
    }

]
