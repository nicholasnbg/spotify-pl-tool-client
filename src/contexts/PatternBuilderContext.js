import React, {useState, useEffect} from 'react';

const PatternBuilderContext = React.createContext();

const PatternBuilderProvider = (props) => {
  const [originalText, setOriginalText] = useState("");
  const [currentResult, setCurrentResult] = useState("");
  const [step, setStep] = useState(0);

  useEffect(() => {
    setCurrentResult(originalText);
    if(originalText.length > 0){
      setStep(1)
    }
  }, [originalText]);

  return (
      <PatternBuilderContext.Provider value={{
        originalText,
        currentResult,
        step,
        setOriginalText
      }}>
        {props.children}
      </PatternBuilderContext.Provider>
  );
};

export {PatternBuilderContext, PatternBuilderProvider}
