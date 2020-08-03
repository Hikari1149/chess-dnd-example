import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

/** utils */
import {BaseElements} from "./utils/elementList";

/** cmp */
import Accordion from '@ubnt/ui-components/Accordion/Accordion'
import Element from './Element'

const Container = styled.div.attrs({
    className:`elements`
})`
    display:flex;
    flex-direction: column;
    width: 300px;
`

const Elements = props => {
    return (
        <Container>
                 {
                     BaseElements.map((ele,i)=>{
                         return (
                             <Element
                                 key={i}
                                 item={ele}
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
