import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./utilities/theme";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Home from "./components/Home";
import store from "./redux/store";
import Counter from "./components/Counter";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <CssBaseline />
          <Router>
            <Navbar />
            <Layout>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/counter" element={<Counter />} />
              </Routes>
            </Layout>
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
