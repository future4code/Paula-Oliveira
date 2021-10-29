import React from "react";
import Router from "./routes/Router";
import theme from "./constants/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import GlobalState from "./contexts/GlobalState";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <GlobalState>

          <Router/>
        
        </GlobalState>
    </ThemeProvider>
  );
}

export default App;
