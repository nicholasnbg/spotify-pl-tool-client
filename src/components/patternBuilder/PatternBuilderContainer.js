import React, {useContext} from 'react';
import {PatternBuilderContext} from "../../contexts/PatternBuilderContext";
import {Column} from "../../styled/common";

const PatternBuilderContainer = (props) => {
  const patternContext = useContext(PatternBuilderContext);

  return (
      <>
        <Column>
          <p>current step: {patternContext.step}</p>
        </Column>
        <Column></Column>
      </>
  );
};

export default PatternBuilderContainer;
