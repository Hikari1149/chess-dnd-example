import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

/** utils */


/** cmp */
import Elements from './Elements'
import FormRender from './FormRender'


const Container = styled.div`
    display:flex;
`

const FormGenerator = props => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Container>
                <Elements/>
                <FormRender/>
            </Container>
        </DndProvider>


    );
};

FormGenerator.propTypes = {

};

export default FormGenerator;
