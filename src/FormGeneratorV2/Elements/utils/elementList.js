
const commonSettings = [
    {
        id:'required',
        widgetName:'checkbox',
        title:'VERIFICATION',
        label:'Required',
    }

]

export const BaseElements = [
    {

        label:'Text', //image label
        widgetName:'input',
        formData:{
           label:'Name',
           value:'',
           placeholder:`Please Enter`
        },
        defaultSettings:[
            {
                $formKey:'label',
                widgetName:'input',
                label:'Label',
                value:'Name'
            },
            {
                $formKey:'placeholder',
                widgetName:'input',
                label:'Placeholder',
                value:'Please Enter'
            },
        ],
    },
    {
        label:'Checkbox',
        widgetName:'checkbox',
        formData:{

          value:false,
        },
        defaultSettings:[
            {
                widgetName:'input',
                label:'Label'
            }
        ],
    },
    {
      label:'Radio',
      widgetName:'radio',
      defaultSettings:[
        {
          widgetName:'input',
          label:'Label'
        }
      ],
    }
].map(d=>({
    ...d,
    defaultSettings:[
        ...d.defaultSettings,
        ...commonSettings,
    ]
}))
