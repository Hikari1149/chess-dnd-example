import React,{useRef,useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


/** utils */

/** cmp */
import FormItem from './FormItem'
import {useDrop} from "react-dnd";
import {declareExportAllDeclaration} from "@babel/types";
import {useDndList, useFormRender} from "../uitls/useCustom";
import {MarkLineStatus} from "../uitls";
import DndItemWrapper,{MarkLine} from '../Wrapper/DndItemWrapper'
import DropListWrapper from '../Wrapper/DropListWrapper'

const Container = styled.div`
`

const FormRender = ({
    isPreview = false,//can change order
    list=[],
    setList,
    handleFormItemClick=()=>{},
    handleFormItemUpdate=()=>{},
}) => {
    /** form dnd handle */
    const {
        pickedDndItemId,
        dndListUpdater
    } = useDndList({list,setList})
    const listRef = useRef({})
    const onDropItemInList = ({item})=>{
        //from left side
        if(item.isElement) {
            dndListUpdater.doAddItem({
                destinationIndex: list.length,
                item:{
                ...item,
                    isElement:false,
                }
            })
        }else{
            dndListUpdater.doMoveItem({destinationIndex:list.length,dragIndex:item.index})
        }
    }
    /** form data handle */
    const onUpdateItem = ({newItem,index})=>{
        let newList = [...list]
        newList[index] = newItem
        setList(newList)
        handleFormItemUpdate({newItem,newList}) // form data联动.
    }
    console.log({
        list,
        pickedDndItemId
    })
    return (
        <Container>
            <DropListWrapper
                canDrop={!isPreview}
                list={list}
                listRef={listRef}
                handleDrop={onDropItemInList}
                renderList={()=>{
                    return (
                        <div ref={listRef}>
                            {
                                list.map((item,i)=>{
                                    return (
                                        <DndItemWrapper
                                            item={item}
                                            canDrag={!isPreview}
                                            canDrop={!isPreview}
                                            isPicked={pickedDndItemId===item.$id}
                                            handleAddItem={dndListUpdater.doAddItem}
                                            handleMoveItem={dndListUpdater.doMoveItem}
                                            handleContentClick={dndListUpdater.doDndItemClick}
                                            key={i}
                                            index={i}
                                            renderItem={()=>{
                                                return (
                                                    <FormItem
                                                        index={i}
                                                        item={item}
                                                        handleClick={handleFormItemClick}
                                                        handleUpdateItem={onUpdateItem}
                                                    />
                                                )
                                            }}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                }}
            />
        </Container>
    );
};

FormRender.propTypes = {
    list:PropTypes.array,
    setList:PropTypes.func,
};

export default FormRender;
