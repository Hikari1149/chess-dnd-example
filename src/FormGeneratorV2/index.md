
### Dnd
```
 
 - DndItemWrapper: mark current postion which can be dropped using isOver property bind by DropItem
 - DndListWrapper: mark list should append an item
   
```


### Form render

```
    list:[
        {
            $id,
            widgetName,
            label,
            value:'',
            settings:[
               {
                    widgetName:'',
                    label:'',
                    value:''
                    $formDataKey:''              
               },
               {
                    widgetName:'',
                    label:'',
                    value:''
                    $formDataKey:''              
                }
            ]
        }   
    ]
```    


#####  update formItem settings
need {indexItem,indexSetting,value}  
eg: list[index1].settings[index2].key = value'
          
update item settings is a little painful to maintain
          
notice -> widget and setting are one to one relationship
          
          
```

       list:[
              {
                  $id,
                  widgetName,
                  label,
                  value:'',
                  defaultSettings:[]
              }   
       ]
      
      
      
      settingsObj:{
        $id => one of listItem
      
        $id:[
            {
                widgetName:'',
                label:'',
                value:'',
                $formKey,
            }           
        ]
      }
      
      now update formItem Setting
      need {$id,settingIndex,value}
      
      settingsObj[$id][index][key] = value
      let {listItem,index} = getListItemFromId($id)
      
      {$formKey}= settingsObj[$id][index]
      listItem[$formKey] = value
      
```



