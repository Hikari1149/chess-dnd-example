import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Board from './Board'
import {observe} from "./Game";
import FormGenerator from "./FormGenerator";

const root = document.getElementById('root')
ReactDOM.render(<FormGenerator/>,root)

// observe((knightPosition)=>
//     ReactDOM.render(<Board knightPosition={knightPosition}/>,root)
// )

