import React from "react";
import { createContext } from "react";

const TestContext = createContext("Default Value"); // Export the context so that it can be used in other components

function ContextConsumer() {
  // This component will have access to the context
  return (
    <TestContext.Consumer>{(value) => <div>{value}</div>}</TestContext.Consumer>
  );
}

function TestComponent() {
  // This component will provide the context
  const value = "CONTEXT CHANGED";
  return (
    <TestContext.Provider value={value}>
      <ContextConsumer />
    </TestContext.Provider>
  );
}

export default TestComponent;
