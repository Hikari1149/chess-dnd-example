import React,{useRef,useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


/** utils */

/** cmp */
import {useDrop} from "react-dnd";
import {MarkLineStatus} from "../uitls";
import {MarkLine} from '../Wrapper/DndItemWrapper'

const Container = styled.div`
    padding: 20px 8px 0 8px;
    border: 1px dashed #bbb;
    margin: 0 0 8px 0;
    width: 500px;
    height: 500px;
    overflow: auto;
    background: #f6f5f6;
`

const DropListWrapper = ({
    list=[],
    listRef={},
    renderList,
    handleDrop,
    canDrop=true
}) => {

    //mark list should append an item
    const [markLineIndex,setMarkLineIndex] = useState(MarkLineStatus.noMark)
    const ref = useRef({})
    const [{isOver},drop] = useDrop({
        accept:canDrop?['element','box']:[],
        collect:(monitor)=>({
            isOver:monitor.isOver({shallow:true}),
        }),
        canDrop:()=>canDrop,
        hover(item,monitor){
            if(!listRef.current){
                return
            }

            const clientOffset = monitor.getClientOffset()
            const childNodes = listRef.current.children
            const lastNode = childNodes ? [...childNodes].pop() : {}
            // no item
            if (!lastNode) {
                setMarkLineIndex(0)
                return
            }else {
                const lastNodeY = lastNode.getBoundingClientRect().top
                const lastNodeHeight = lastNode.clientHeight
                if (clientOffset.y > lastNodeY + lastNodeHeight * 0.5) {
                    setMarkLineIndex(list.length - 1)
                } else {
                    setMarkLineIndex(MarkLineStatus.noMark)
                }
            }

        },
        drop(item,monitor){
            const didDrop = monitor.didDrop()
            //drop is already handled by item
            if(didDrop){
                return
            }
            handleDrop({item})
            setMarkLineIndex(MarkLineStatus.noMark)
        }
    })

    drop(ref)
    const visibleLastMarkLine = markLineIndex !== MarkLineStatus.noMark && isOver
    return (
        <Container ref={ref}>
            {renderList()}
            {visibleLastMarkLine && <MarkLine mgT={0} mgB={0}/>}
        </Container>
    );
};

DropListWrapper.propTypes = {
    list:PropTypes.array.isRequired,
    renderList:PropTypes.func.isRequired,
    handleDrop:PropTypes.func.isRequired,
    listRef:PropTypes.node,
};

export default DropListWrapper;
