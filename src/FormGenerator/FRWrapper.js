import React from 'react';
import PropTypes from 'prop-types';
import Elements from "./Elements";
import FormRender from "./FormRender";

import {combineSchema} from "./uitls";

const FRWrapper = ({
   simple = true,
   schema,
   formData,
   onChange,
   onSchemaChange,
   templates,
   submit,
   ...globalProps
}) => {

    const {
        preview,
        setState,
        mapping,
        widgets,
        selected,
        ...rest
    } = globalProps

    const _schema = combineSchema(schema.propsSchema,schema.uiSchema)
    return (
        <div>

            <Elements/>
            <FormRender/>
        </div>
    );
};

FRWrapper.propTypes = {

};

export default FRWrapper;
