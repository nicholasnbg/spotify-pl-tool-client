import React, {Component} from 'react';

const PatternBuilderContext = React.createContext();

class PatternBuilderProvider extends Component {
  state = {
    initialText: '',
    currentResult: '',
    step: 0,
    setInitialText: (text) => this.setInitialText(text)
  };

  render() {
    return (
        <PatternBuilderContext.Provider value={{
          state: this.state,
        }}>
          {this.props.children}
        </PatternBuilderContext.Provider>
    )
  }

  setInitialText = (text) => {
    this.setState({
      ...this.state,
      initialText: text,
      currentResult: text
    })
    this.setStep(1)
  };

  setStep = (newStep) => {
    this.setState({
      ...this.state,
      step: newStep
    })
  }
}

export {PatternBuilderContext, PatternBuilderProvider}
