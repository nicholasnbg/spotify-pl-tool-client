import React, {useState} from 'react';

const PatternBuilderContext = React.createContext();

const PatternBuilderProvider = (props) => {
  const [originalText, setOriginalText] = useState("");
  const [currentResult, setCurrentResult] = useState("");
  const [step, setStep] = useState(0);

  const setInitialText = (text) => {
    setOriginalText(text);
    setCurrentResult(text);
    setStep(1)
  };

  return (
      <PatternBuilderContext.Provider value={{
        originalText,
        currentResult,
        step,
        setInitialText: (text) => setInitialText(text)
      }}>
        {props.children}
      </PatternBuilderContext.Provider>
  );
};

export {PatternBuilderContext, PatternBuilderProvider}
