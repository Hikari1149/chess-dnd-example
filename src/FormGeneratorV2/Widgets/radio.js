import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/** utils */

/** cmp */
import UIRadio from '@ubnt/ui-components/Radio/Radio'
const Container = styled.div`
    display:flex;
`;

const Radio = ({
    value='',
    handleChange
}) => {
  const onChange = (e)=>{
      handleChange(e.target.checked)
  }
  return (
    <Container>
      <UIRadio
          checked={value}
          onChange={onChange}
      />
    </Container>
  );
};

Radio.propTypes = {

};

export default Radio;
