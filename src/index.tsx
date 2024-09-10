import { render } from "react-dom";
import { Counter } from "./components/counter";

render(
  <div>
    <h1>Hello</h1>

    <Counter />
  </div>,
  document.getElementById("root")
);
