import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Elements from "./Elements";
import lodashGet from 'lodash/get'
import FormRender from "./FormRender";

import {combineSchema, dataToFlatten, flattenSchema,idToSchema} from "./uitls";
import {InnerCtx} from "./uitls/context";
import {useSet} from "./uitls/hooks";
import {useFormGenerator} from "./uitls/useCustom";

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
        list,
        settingsObj,
        pickedItemId,
        pickedSettings,
        formUpdater,
    } = useFormGenerator()


    console.log({
        settingsObj,
        pickedItemId,
        pickedSettings
    })

    const onSave = ()=>{
       let formList = list.map(d=>{
           const settings = settingsObj[d.$id]
           return {
               ...d,
               settings,

           }
       })
       alert(JSON.stringify(formList))
        console.log({
            formList
        })
    }
    return (
            <Container>
                <Elements/>
                <FormRender
                    list={list}
                    pickedItemId={pickedItemId}
                    setList={formUpdater.setList}
                    setPickedId={formUpdater.setPickedItemId}
                    handleAddItem={formUpdater.onAddFormItem}
                />
                <WidgetConfigWrapper>
                    <FormRender
                        list={pickedSettings}
                        setList={()=>{}}
                        isPreview={true}
                        handleUpdateItem={formUpdater.onUpdateFormItem}
                    />
                </WidgetConfigWrapper>

                <button onClick={onSave}>Save</button>

            </Container>
    );
};

FRWrapper.propTypes = {

};

export default FRWrapper;
