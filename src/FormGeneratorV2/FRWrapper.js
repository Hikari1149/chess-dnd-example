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



    const onFormItemUpdate = ({newItem,newList})=>{
        const {formDataKey} = newItem
        //widget setting is updated
        console.log({newItem})
        if(formDataKey){
           /** update currentWidget  */
           const newSettingItem = newItem
           const newFormData = {
               ...currentWidget.formData,
               [newSettingItem.formDataKey]:newSettingItem.value
           }
           const newCurrentWidget = {
               ...currentWidget,
               settings:newList,
               formData:newFormData
           }
           formUpdater.setCurrentWidget(newCurrentWidget)
           /** update widget list */
           const {index} = newCurrentWidget
           const newWidgetList = [...list]
            newWidgetList [index] = newCurrentWidget
           formUpdater.setList(newWidgetList)
        }


    }

    console.log({list,currentWidget})
    return (
            <Container>
                <Elements/>
                <FormRender
                    list={list}
                    setList={formUpdater.setList}
                    selectedIndex={currentWidget.index}
                    handleFormItemClick={formUpdater.setCurrentWidget}
                />
                <WidgetConfigWrapper>
                    <FormRender
                        list={currentWidget.settings}
                        setList={formUpdater.setWidgetSettings}
                        isPreview={true}
                        handleFormItemUpdate={onFormItemUpdate}
                    />
                </WidgetConfigWrapper>
            </Container>
    );
};

FRWrapper.propTypes = {

};

export default FRWrapper;
