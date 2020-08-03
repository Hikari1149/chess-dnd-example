import React,{useRef,useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {useDrag, useDrop} from "react-dnd";

/** utils */

/** cmp */
export const MarkLine = styled.div`
  height: 3px;
  width: 100%;
  background: #f00;
  margin-top: ${props=>props.mgT || 0}px;
  margin-bottom: ${props=>props.mgB || 15}px;
  
`

const Container = styled.div`
    display:flex;
    flex-direction: column;
    padding-bottom: 15px; //increase drop area
    overflow-x: hidden;
`
const ContentWrapper = styled.div.attrs(props=>{
    return {
        className: props.isPicked ? 'picked' : ''
    }
})`
    width: 100%;
    box-sizing: border-box;
    &:hover{
      border: 1px dashed ${props=>props.canDrag?'#006fff':'transparent'};
    }
    &.picked{
      border: 1px solid #006fff;
    }
    border: 1px solid transparent;
    
    outline: none;
    //border: 1px solid transparent;
    background: ${props=>
    //props.isOver?'#0ff':'#fff'
    (props.isDragging && '#000')
    || '#fff'
    };
    padding: 6px 12px;
    cursor: ${props=>props.canDrag?'move':'inherit'};
    opacity: ${props=>props.isDragging?0.5:1};
   // transition: all 2s ease;
`

const DndItemWrapper = ({
    item={},
    index=0,
    isPicked,
    handleMoveItem,
    handleAddItem,
    handleContentClick=()=>{},
    renderItem,
    canDrag=true,
    canDrop=true
}) => {
    const {
        label,
        $id,
    } = item

    const contentRef = useRef('')
    const [{isDragging},drag] = useDrag({
        item:{
            type:canDrag?'box':'no-drag',
            label,
            index,
        },
        begin:(monitor)=>{
            /** trigger click content */
            handleContentClick({item})
        },
        collect:(monitor)=>({
            isDragging:monitor.isDragging()
        }),

    })
    const [{isOver},drop] = useDrop({
        accept:canDrop?['box','element']:[],
        collect:(monitor => ({
            isOver:monitor.isOver({shallow:true}),
        })),
        drop(item){
            const dragIndex = item.index
            const hoverIndex = index
            const destinationIndex = dragIndex < hoverIndex ?hoverIndex-1:hoverIndex

            //item from left side
            if(item.isElement) {
                handleAddItem({destinationIndex:hoverIndex,item})
            }else{
                handleMoveItem({dragIndex, destinationIndex})
            }
        },
    })
    const onContentClick = ()=>{
        //handleContentClick({item})
    }
    return (
        <Container ref={drop}>
            {isOver && <MarkLine/>}
            <ContentWrapper
                ref={canDrag?drag:contentRef}
                tabIndex={1}
                canDrag={canDrag}
                isDragging={isDragging}
                isPicked={isPicked}
                onClick={onContentClick}


            >
                {renderItem()}
            </ContentWrapper>
        </Container>
    );
};

DndItemWrapper.propTypes = {

};

export default DndItemWrapper;
