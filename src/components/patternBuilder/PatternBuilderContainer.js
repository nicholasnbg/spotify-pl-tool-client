import React from 'react';
import {PatternBuilderContext} from "../../contexts/PatternBuilderContext";
import styled from 'styled-components'

const PatternBuilderContainer = (props) => {

  return (
      <React.Fragment>
        <PatternBuilderContext.Consumer>
          {
            (context) => (
              <React.Fragment>
                <Column>
                  <p>current step: {context.step}</p>
                </Column>
                <Column></Column>
              </React.Fragment>
            )
          }
        </PatternBuilderContext.Consumer>
      </React.Fragment>
  );
}

export default PatternBuilderContainer;

const Column = styled.div`
  width: 33%;
`
