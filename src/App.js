import React from "react";
import styled from "styled-components"
import Router from "./routes/Router"
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/theme";

const Div = styled.div`
    text-align: center;
    font-size: 40px;
    color: red;


`
const App = () => {
  return (
    <Div>
      <ThemeProvider theme={theme}>
      <Router />
      </ThemeProvider>
    </Div>
  );
}

export default App;
