import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {widgets} from "../Widgets";
import {getWidgetName} from "../uitls";

/** utils */

/** cmp */

const Container = styled.div`
    display:flex;
`

const RenderField = ({
    item={},


})=> {
    const {
        schema
    } = item
    let widgetName = getWidgetName(schema)
    const Widget = widgets[widgetName]

    return (
        <Container>

            <div>
                <Widget/>
            </div>
        </Container>
    );
};

RenderField.propTypes = {

};

export default RenderField;
