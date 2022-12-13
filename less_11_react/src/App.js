
import { RouterProvider } from "react-router-dom";
import { router } from "./configs/routers";


function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
