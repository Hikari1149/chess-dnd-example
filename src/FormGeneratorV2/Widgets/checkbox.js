import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

/** utils */

/** cmp */

const Container = styled.div`
    display:flex;
`

const CheckBox = props => {
    return (
        <Container>
            <input type="checkbox"/>
        </Container>
    );
};

CheckBox.propTypes = {

};

export default CheckBox;
