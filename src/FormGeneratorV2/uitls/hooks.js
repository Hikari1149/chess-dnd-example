import {useReducer } from 'react'

// class cmp setState
export const useSet = initState => {
    const [state,setState] = useReducer((state,newState)=>{
        let action = newState
        if(typeof newState === 'function'){
            action = action(state)
        }
        if(newState.action && newState.payload){
            action = newState.payload
            if(typeof  action === 'function'){
                action = action(state)
            }
        }
        const result = {...state,...action} //
        return result
    },initState)
    const setStateWithActionName = (state,actionName)=>{
        setState(state)
    }
    return [state,setStateWithActionName]
}
