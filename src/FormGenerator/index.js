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
        formData:{},
        schema:{},
        selected:undefined,// 被选中ID.
        preview:false // preview == false -> edit mode
    })
    /** effect: update default schema */
    useEffect(()=>{
        const schema = defaultValue || SCHEMA
        setState({
            schema,
            formData:(schema && schema.formData) || {}
        })
    },[])

    const {schema,formData,preview,selected,hovering} = state

    const onChange = data=>{
        setState({formData:data})
    }
    const onSchemaChange = newSchema =>{
        const result = {...schema,propsSchema:newSchema}
        setState({schema:result})
    }
    const _mapping = {...mapping,array:'listEditor'};

    const globalProps = {
        preview,
        setState,
        selected,
        simple:false,
        mapping:_mapping,
        widgets,
    }
    const FRProps = {
        schema,
        formData,
        onChange,
        onSchemaChange,
        templates,
        submit,
        ...globalProps
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
