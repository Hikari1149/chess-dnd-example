import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'

/** utils */
import {Widgets} from '../Widgets'

/** cmp */
import {LabelTitle} from "./styled";

const Container = styled.div`
    display:flex;
    flex-direction: column;
    .label-title{
      margin-bottom: 6px;
    }
     
`

const FormItem = ({
    index,
    item={},
    handleClick=()=>{},
    handleUpdateItem=()=>{},
})=> {
    const {
        widgetName,
        formData={},
    } = item
    const Widget = Widgets[widgetName]
    const widgetData =isEmpty(formData)? item:formData
    const {
        title=''
    } = widgetData


    const onChange = (d)=>{
       handleUpdateItem({
           newItem:{
               ...item,
               value:d
           },
           index,
       })
    }
    const onItemClick = ()=>{
        handleClick({item})
    }

    return (
        <Container
            onClick={onItemClick}
        >
            {title && <LabelTitle>{title}</LabelTitle>}

            <Widget
                {...widgetData}
                handleChange={onChange}
            />
        </Container>
    );
};

FormItem.propTypes = {

};

export default FormItem;
