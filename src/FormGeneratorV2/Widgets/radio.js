import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/** utils */

/** cmp */
import UIRadio from '@ubnt/ui-components/Radio/Radio'
const Container = styled.div`
    display:flex;
`;

const Radio = props => {
  return (
    <Container>
      <UIRadio
      />
    </Container>
  );
};

Radio.propTypes = {

};

export default Radio;
