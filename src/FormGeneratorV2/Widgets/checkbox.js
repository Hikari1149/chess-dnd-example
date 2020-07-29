import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

/** utils */

/** cmp */
import Checkbox from '@ubnt/ui-components/Checkbox/Checkbox'
const Container = styled.div`
    display:flex;
`

const CheckBox = ({
    label=''
})=> {
    return (
        <Container>
          <Checkbox
          >
              {label}
          </Checkbox>
        </Container>
    );
};

CheckBox.propTypes = {

};

export default CheckBox;
