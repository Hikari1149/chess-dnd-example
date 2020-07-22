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
`

const Element = ({
    text,
    name,
    schema,
    className='',
}) => {

    const [{},dragRef] = useDrag({
        item:{
            type:'box',
            dragItem:{
                parent:'#',
                schema,
                children:[]
            },
            $id:`#/${name}_${nanoid(6)}`
        },
        end:(item,monitor)=>{

        }

    })


    return (
        <Container
            ref={dragRef}
            className={className}
        >
            {text}
        </Container>
    );
};

Element.propTypes = {

};

export default Element;
