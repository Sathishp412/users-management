import { useState } from "react";

import RouteConfig from "./Components/RouteConfig";
import Login from "./Components/LoginPage/Login";
import LoginRoute from "./Components/LoginPage/LoginRoute";
import DashBoard from "./Components/DashBoard";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Login></Login> */}

      <RouteConfig></RouteConfig>

      {/* <DashBoard></DashBoard> */}
    </div>
  );
}

export default App;
