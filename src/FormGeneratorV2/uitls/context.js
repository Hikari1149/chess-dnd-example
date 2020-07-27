import {createContext,useContext} from 'react'

export const Ctx = createContext(()=>{})

export const InnerCtx = createContext(()=>{})

export const useStore = ()=>{
    return useContext(InnerCtx)
}
