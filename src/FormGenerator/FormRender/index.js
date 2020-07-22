import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


/** utils */

/** cmp */
import Wrapper from './Wrapper'
import RenderField from './RenderField'

const Container = styled.div`
    display:flex;
    padding: 20px 8px 0 8px;
    border: 1px dashed #bbb;
    margin: 0 0 8px 0;
    width: 500px;
    height: 500px;
    overflow: auto;
    background: #f6f5f6;
`

const FormRender = props => {
    return (
        <Container>
            <Wrapper>
                <div>
                  {/*  <RenderField>


                    </RenderField>*/}
                </div>

            </Wrapper>
        </Container>
    );
};

FormRender.propTypes = {

};

export default FormRender;
