import {useState,useMemo} from 'react'
import {useSet} from "./hooks";


export const useFormGenerator = ()=>{
    const [list,setList] = useState([]) // current form list
    const [settingsObj,setSettingsObj] = useState({})
    const [pickedItemId,setPickedItemId] = useState(-1)

    /** handler */
    const onAddFormItem = ({item,destinationIndex})=>{
        /** update formList */
        const newList = [...list]
        const {formData={}} = item
        newList.splice(destinationIndex,0,{
            $id:item.$id,
            widgetName:item.widgetName,
            defaultSettings:item.defaultSettings,
            ...formData,
            index:destinationIndex,
        })

        /** update settingsObj */
        let newSettingsObj = {...settingsObj}
        newSettingsObj[item.$id] = item.defaultSettings
        /** */
        setPickedItemId(item.$id)
        setList(newList)
        setSettingsObj(newSettingsObj)
    }

    const onUpdateFormItem = ({newItem,index,newList})=>{
        let {$formKey} = newItem
        if($formKey){
            /** update co-respond formItem Data */
            let newFormList = [...list]
            let itemIndex = list.findIndex(d=>d.$id === pickedItemId)
            newFormList [itemIndex] = {
                ...list[itemIndex],
                [$formKey]:newItem.value
            }
            /** */
            setList(newFormList)
        }
        /**  update settingsObj */
        let newSettingsObj = {...settingsObj}
        let settings = newList
        newSettingsObj[pickedItemId] = settings
        setSettingsObj(newSettingsObj)
    }

    /** variants */


    const pickedSettings = useMemo(()=>{
        return settingsObj[pickedItemId]
    },[pickedItemId,settingsObj])
    return {
        list,
        settingsObj,
        pickedItemId,
        pickedSettings,
        formUpdater:{
            setList,
            onUpdateFormItem,
            onAddFormItem,
            setPickedItemId,
        }

    }
}

/**
 *
 * @param list   *isRequired
 * @param setList *isRequired
 * @param setPickedId *isRequired
 * @param handleAddItem
 * @returns {{pickedDndItemId: number, dndListUpdater: {doAddItem: doAddItem, doMoveItem: doMoveItem, doDropItemInList: doDropItemInList, doDndItemClick: doDndItemClick}}}
 */
export const useDndList = ({
    list,
    setList,
    setPickedId=()=>{},
    handleAddItem,
})=>{
    const [pickedItemId,setPickedItemItemId] = useState(-1)
    /** setter */


    /** dnd handler */
    const doAddItem = ({destinationIndex,item})=>{
        const newList = [...list]
        if(handleAddItem){
            handleAddItem({destinationIndex,item})  //customize add item
        }else {
            newList.splice(destinationIndex, 0, {
                ...item,
                index: destinationIndex,
            })
            setList(newList)
        }
    }
    const doMoveItem = ({dragIndex,destinationIndex})=>{
        if(destinationIndex<0){
            return
        }
        const newList = [...list]
        const dragWidget = list[dragIndex]
        newList.splice(dragIndex,1)
        newList.splice(destinationIndex,0,dragWidget)
        setList(newList)
    }
    const doDndItemClick = ({item={}})=>{
        setPickedItemItemId(item.$id)
        setPickedId(item.$id) //
    }
    const doDropItemInList = ({item={}})=>{
        /** from left side */
        if(item.isElement) {
            doAddItem({
                destinationIndex: list.length,
                item:{
                    ...item,
                    isElement:false,
                }
            })
        }else{
            doMoveItem({destinationIndex:list.length,dragIndex:item.index})
        }
    }

    return {
        pickedDndItemId:pickedItemId,
        dndListUpdater: {
            doAddItem,
            doMoveItem,
            doDndItemClick,
            doDropItemInList,
        }
    }

}
