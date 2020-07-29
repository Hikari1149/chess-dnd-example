import {useSet} from "./hooks";


export const useFormRender = ()=>{
    const [state,setState] = useSet({
        list:[],
        currentWidget:{
            settings:[]
        },
    })
    /** */
    const {
        list,
        currentWidget
    } = state

    /** setter */
    const setList = (list)=>{
        setState({
            list
        })
    }
    const setCurrentWidget = (payload={})=>{
        console.log({
            payload
        })
        setState({
            currentWidget: {
                ...state.currentWidget,
                ...payload
            }
        })
    }
    const setWidgetSettings = (list)=>{
        setCurrentWidget({settings:list})
    }
    /** handler */

    return {
        state,
        formUpdater:{
            setList,
            setCurrentWidget,
            setWidgetSettings,
        }

    }
}


export const useDndList = ({list,setList})=>{

    const doAddItem = ({destinationIndex,item})=>{
        const newList = [...list]
        newList.splice(destinationIndex,0,{
            ...item,
            index:destinationIndex,
        })
        setList(newList)
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
    return {
        doAddItem,
        doMoveItem
    }

}
