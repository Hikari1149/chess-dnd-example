import React from 'react'
import Knight from "./Knight";
import BoardSquare from "./BoardSquare";
import {canMoveKnight, moveKnight} from "./Game";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function renderSquare(i,[knightX,knightY]){
    const x = i%8
    const y = Math.floor(i/8)
    return (
        <DndProvider backend={HTML5Backend}>
            <div
                onClick={()=>handleSquareClick(x,y)}
                key={i}
                style={{
                    width:'12.5%',
                    height:'12.5'
                }}>
                <BoardSquare x={x} y={y}>
                    {renderPiece(x,y,[knightX,knightY])}
                </BoardSquare>
            </div>
        </DndProvider>

    )
}
function renderPiece(x,y,[knightX,knightY]){
    if(x ===knightX && y === knightY){
        return <Knight/>
    }

}
function handleSquareClick(toX,toY) {
    if(canMoveKnight(toX,toY)) {
        moveKnight(toX, toY)
    }
}


export default function Board({
    knightPosition,
}){

    const squares = []
    for (let i=0 ;i<64;i++){
        squares.push(renderSquare(i,knightPosition))
    }
    return (
        <div
            style={{
                width:'100%',
                height:'100%',
                display:'flex',
                flexWrap:'wrap'
            }}
        >
            {squares}
        </div>
    )
}
