import React, { useContext } from "react";
import TestContext from "./LightBulb";

export default () => {
  const { setEnabled } = useContext(TestContext);
  const makeEnabled = () => setEnabled(true);
  const makeDisabled = () => setEnabled(false);

  return (
    <div>
      <button onClick={makeEnabled}>Enable</button>
      <button onClick={makeDisabled}>Disable</button>
    </div>
  );
};
