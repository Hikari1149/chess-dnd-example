import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

/** utils */

/** cmp */

const Container = styled.div`
    display:flex;
`

const Input = props => {
    return (
        <Container>
            <input
                type="text"

            />
        </Container>
    );
};

Input.propTypes = {

};

export default Input;
