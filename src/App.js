import "./App.css";
//import UserCardsPage from "./pages/userCardsPage/UserCardsPage";
import { useState } from "react";
import TestContext from "./LightBulb";
import Logic from "./Logic";

function App() {
  const [enabled, setEnabled] = useState(false);
  return (
    <TestContext.Provider value={{ enabled, setEnabled }}>
      <div>
        {enabled ? (
          <div> LIGHT BULB enabled </div>
        ) : (
          <div> LIGHT BULB disabled </div>
        )}
      </div>
      <Logic />
    </TestContext.Provider>
  );
}

export default App;
