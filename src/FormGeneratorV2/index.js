import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

/** utils */
import {mapping} from "./uitls";

/** cmp */
import FRWrapper from "./FRWrapper";
import {widgets} from "./Widgets";


import {useSet} from "./uitls/hooks";


const Container = styled.div`
    display:flex;
`

const SCHEMA = {
    propsSchema:{
        type:'object',
        properties:{}
    },
    uiSchema:{},
    formData:{}
}

const FormGenerator = ({
   defaultValue,
   templates,
   submit,
}) => {
    const [state,setState] = useSet({

    })
    const FRProps = {

    }

    return (
        <DndProvider backend={HTML5Backend}>
            <FRWrapper {...FRProps}/>
        </DndProvider>
    );
};

FormGenerator.propTypes = {

};

export default FormGenerator;
