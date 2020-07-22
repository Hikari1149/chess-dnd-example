import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

/** utils */
import {BaseElements} from "./utils/elementList";

/** cmp */
import Element from './Element'

const Container = styled.div`
    display:flex;
    
`

const Elements = props => {
    return (
        <Container>
                 {
                     BaseElements.map((ele,i)=>{
                         return (
                             <Element
                                 key={i}
                                 {...ele}
                             />
                         )
                     })
                 }
        </Container>
    );
};

Elements.propTypes = {

};

export default Elements;
