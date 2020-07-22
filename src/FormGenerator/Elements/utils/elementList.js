

export const BaseElements = [
    {
        text:'Text',
        label:'', //image label
        name:'input',
        widget:'input',
        schema:{
          title:'Text',
          type:'string'
        },
        setting:{
            minLength: {
                title: '最短字数',
                type: 'number',
            },
            maxLength: {
                title: '最长字数',
                type: 'number',
            },
        }
    },
    {
        text:'Checkbox',
        label:'',
        name:'checkbox',
        widget:'checkbox',
        schema:{
          title:'是否选择',
          type:'boolean'
        },
        setting:{
           title:'默认是否',
           type:'boolean'
        }
    }
]
