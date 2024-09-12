import { Router } from "./components/router/router";
import { useTheme } from "./theme/useTheme";
import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>

      <Router />
    </div>
  );
};
