import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import UIInput from '@ubnt/ui-components/Input/Input'

/** utils */

/** cmp */

const Container = styled.div`
    display:flex;
`

const Input = ({
  handleChange,
  label='',
  value,
  placeholder='',
}) => {
    const onChange = (e)=>{
      handleChange(e.target.value)
    }
    return (
        <Container>
            <UIInput
              label={label}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
            />
        </Container>
    );
};

Input.propTypes = {

};

export default Input;
