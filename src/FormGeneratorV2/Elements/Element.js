import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {useDrag} from "react-dnd";
import {nanoid} from 'nanoid'
/** utils */

/** cmp */

const Container = styled.div`
  cursor: pointer;
  height: 35px;
  width: 100%;
  display: flex;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  background-color: #f5f7fa;
  margin-bottom: 20px;
`

const Element = ({
    item,
    className='',
}) => {
    const {
      label,
    } = item
    const [{},dragRef] = useDrag({
        item:{
            $id:`${label}_${nanoid(6)}`,
            type:'element',
            isElement:true,
            ...item,
        },
        end:(item,monitor)=>{

        }

    })


    return (
        <Container
            ref={dragRef}
            className={className}
        >
            {label}
        </Container>
    );
};

Element.propTypes = {

};

export default Element;
