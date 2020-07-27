import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Elements from "./Elements";
import FormRender from "./FormRender";

import {combineSchema, dataToFlatten, flattenSchema,idToSchema} from "./uitls";
import {InnerCtx} from "./uitls/context";
import {useSet} from "./uitls/hooks";
import {useFormRender} from "./uitls/useCustom";

const Container = styled.div`
  display: flex;
  .elements{
    margin-right: 50px;
  }
`
const WidgetConfigWrapper = styled.div`
  margin-left: 100px;
`

const FRWrapper = ({
}) => {
    const {
        state,
        formUpdater,
    } = useFormRender()
    const {
        list,
        currentWidget={}
    } = state


    const doUpdateSettings = (list)=>{
        formUpdater.setCurrentWidget({settings:list})
    }
    console.log({state})
    return (
            <Container>
                <Elements/>
                <FormRender
                    list={list}
                    setList={formUpdater.setList}
                    handleFormItemClick={formUpdater.setCurrentWidget}
                />
                <WidgetConfigWrapper>
                    <FormRender
                        list={currentWidget.settings}
                        setList={doUpdateSettings}
                        isPreview={true}
                    />
                </WidgetConfigWrapper>
            </Container>
    );
};

FRWrapper.propTypes = {

};

export default FRWrapper;
