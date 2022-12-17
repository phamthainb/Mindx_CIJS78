import { useState } from "react";
import { AppContext } from "./contexts/AppContext";
import HomePage from "./pages/HomePage";

function App() {
  const [data, setData] = useState({ data: [] });

  return (
    <AppContext.Provider value={{ ...data, setData }}>
      <HomePage />
    </AppContext.Provider>
  );
}

export default App;
