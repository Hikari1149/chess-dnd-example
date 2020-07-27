import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

/** utils */
import {Widgets} from '../Widgets'

/** cmp */

const Container = styled.div`
    display:flex;
`

const FormItem = ({
    item={},
    handleClick
})=> {
    const {
        widgetName,
    } = item
    const Widget = Widgets[widgetName]
    return (
        <Container
            onClick={()=>handleClick(item)}
        >
            <Widget
            />
        </Container>
    );
};

FormItem.propTypes = {

};

export default FormItem;
