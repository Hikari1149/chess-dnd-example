export const mapping = {
    default: 'input',
    string: 'input',
    array: 'list',
    boolean: 'checkbox',
    integer: 'number',
    number: 'number',
    object: 'map',
    'string:upload': 'upload',
    'string:date': 'date',
    'string:dateTime': 'date',
    'string:time': 'date',
    'string:textarea': 'textarea',
    'string:color': 'color',
    'string:image': 'input',
    'range:date': 'dateRange',
    'range:dateTime': 'dateRange',
    '*?enum': 'select',
    'array?enum': 'checkboxes',
    '*?readonly': 'text',
};


export const getWidgetName = ({schema})=>{
    return 'input'
}

//get propsSchema's children
function getChildren(schema){
    if(!schema) return []
    const {
        //object
        properties,
        //array
        items,
        type,
    } = schema
    if(!properties && !items){
        return []
    }
    let schemaSubs = {}
    if(type ==='object'){
        schemaSubs = properties
    }
    if(type === 'array'){
        schemaSubs = items
    }
    return Object.keys(schemaSubs).map(name=>({
        schema:schemaSubs[name],
        name,
    }))
}
export const combineSchema = (propsSchema={},uiSchema={})=>{
    const propList  = getChildren(propsSchema)
    const newList = propList.map(p=>{
        const {name } =p
        const {type,enum:options,properties,items} = p.schema
        const isObj = type === 'object' && properties
        const isArr = type === 'array' && items && !options//
        const ui = name && uiSchema[p.name]
        if(!ui){
            return p
        }

        //list scene
        if(isArr){
            const newItems = combineSchema(items,ui.items||{})
            return {
                ...p,
                schema:{
                    ...p.schema,...ui,
                    items:newItems
                }}
        }
        // obj
        if(isObj){
            const newSchema = combineSchema(p.schema,ui)
            return {...p,schema:newSchema}
        }
        return {...p,schema:{...p.schema,...ui}}
    })
    return {...propsSchema}


}
