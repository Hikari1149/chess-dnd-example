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
    handleFormItemClick,
}) => {
    const {
        doAddItem,
        doMoveItem,
    } = useDndList({list,setList})
    const listRef = useRef({})
    const onDropItemInList = ({item})=>{
        //from left side
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
                                            canDrag={!isPreview}
                                            canDrop={!isPreview}
                                            handleAddItem={doAddItem}
                                            handleMoveItem={doMoveItem}
                                            key={i}
                                            index={i}
                                            renderItem={()=>{
                                                return (
                                                    <FormItem
                                                        item={item}
                                                        handleClick={()=>handleFormItemClick(item)}
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
