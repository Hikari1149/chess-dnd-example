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
    pickedItemId,
    setList,
    setPickedId=()=>{},
    handleAddItem,
    handleUpdateItem
}) => {
    /** form dnd handle */
    const {
        dndListUpdater
    } = useDndList({list,setList,setPickedId,handleAddItem})
    const listRef = useRef({})
    /** form data handle */
    const onUpdateItem = ({newItem,index})=>{
        let newList = [...list]
        newList[index] = newItem
        setList(newList)
        handleUpdateItem && handleUpdateItem({newItem,index,newList}) // customize updateItem
    }
    const onClickFormItem = ({item})=>{
        setPickedId(item.$id)
    }

    if(!isPreview) {
        console.log({
            list,
            pickedItemId
        })
    }
    return (
        <Container>
            <DropListWrapper
                canDrop={!isPreview}
                list={list}
                listRef={listRef}
                handleDrop={dndListUpdater.doDropItemInList}
                renderList={()=>{
                    return (
                        <div ref={listRef}>
                            {
                                list.map((item,i)=>{
                                    const isPicked = pickedItemId===item.$id  && !isPreview
                                    return (
                                        <DndItemWrapper
                                            item={item}
                                            canDrag={!isPreview}
                                            canDrop={!isPreview}
                                            isPicked={isPicked}
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
                                                        handleUpdateItem={onUpdateItem}
                                                        handleClick={onClickFormItem}
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
