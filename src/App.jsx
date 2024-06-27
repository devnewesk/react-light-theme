import { createContext, useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import "./App.css";
import Form from "./Form";
export const themeContext = createContext();
function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <themeContext.Provider value={{ toggleTheme, theme }}>
      {" "}
      <div className="app" id={theme}>
        <main>
          <Form />
          <div onClick={toggleTheme} className="icon-container">
            {theme === "light" ? (
              <FaRegMoon className="icon moon" size={32} />
            ) : (
              <FaRegSun className="icon sun" size={32} />
            )}{" "}
          </div>
        </main>
      </div>{" "}
    </themeContext.Provider>
  );
}

export default App;
