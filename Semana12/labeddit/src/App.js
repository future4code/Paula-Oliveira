import React from "react";
import Router from "./routes/Router";
import theme from "./constants/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./components/Header/Header";
import { BrowserRouter} from "react-router-dom";
import { useState } from "react";

const App = () => {

  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState(
    token ? "logout" : "login"
  );

  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
          <Router setRightButtonText={setRightButtonText}/>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
