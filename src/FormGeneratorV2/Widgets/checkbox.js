import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {nanoid} from "nanoid";

/** utils */

/** cmp */
import Checkbox from '@ubnt/ui-components/Checkbox/Checkbox'
const Container = styled.div`
    display:flex;
`

const CheckBox = ({
    label='',
    value,
    handleChange
})=> {
    const onChange = (e)=>{
       handleChange(e.target.checked)
    }
    return (
        <Container>
          <Checkbox
              checked={value}
              value={value}
              onChange={onChange}
              id={`ui-checkbox-${nanoid(6)}`}
          >
              {label}
          </Checkbox>
        </Container>
    );
};

CheckBox.propTypes = {

};

export default CheckBox;
