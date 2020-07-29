import React,{useRef} from 'react';
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
const ContentWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    &:hover{
      border: 1px dashed #006fff;
    }
    &:focus{
      border: 1px solid #006fff;
      outline: none;
    }
    border: 1px solid transparent;
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
    formItem={},
    index=0,
    isSelected,
    handleMoveItem,
    handleAddItem,
    renderItem,
    canDrag=true,
    canDrop=true
}) => {
    const {
        label,
    } = formItem
    const contentRef = useRef('')
    const [{isDragging},drag] = useDrag({
        item:{
            type:canDrag?'box':'no-drag',
            label,
            index,
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

    return (
        <Container ref={drop}>
            {isOver && <MarkLine/>}
            <ContentWrapper
                ref={canDrag?drag:contentRef}
                tabIndex={1}
                canDrag={canDrag}
                isDragging={isDragging}
                isSelected={isSelected}

            >
                {renderItem()}
            </ContentWrapper>
        </Container>
    );
};

DndItemWrapper.propTypes = {

};

export default DndItemWrapper;
