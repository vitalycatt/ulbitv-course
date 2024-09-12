import { Router } from "./components/router/router";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};
