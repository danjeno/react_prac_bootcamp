import { createContext } from "react";

const TestContext = createContext({
  enabled: false,
  setEnabled: (bulb) => {},
});
export default TestContext;
