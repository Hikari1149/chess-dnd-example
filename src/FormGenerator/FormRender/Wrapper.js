import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {useDrag,useDrop} from "react-dnd";
/** utils */

/** cmp */

const Container = styled.div.attrs({
    className:'field-wrapper'
})`
  
`
/** FormItemWrapper */
const Wrapper = ({
    children
}) => {


    const [{},dropRef] = useDrop({
        accept:'box',
        drop:(item,monitor)=>{
            console.log('drop item ',item)
        },
        // hover:(item)=>{
        //     console.log('drag item hover: ',item)
        // },
        collect:(monitor)=>{
            return {
                isOver:!!monitor.isOver()
            }
        }
    })
    return (
        <Container
            ref={dropRef}
        >
            {children}
        </Container>
    );
};

Wrapper.propTypes = {

};

export default Wrapper;
