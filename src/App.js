import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import theme from "./theme";
import { Helmet } from "react-helmet";
import GlobalStyle from "./global.css";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="keywords" content="Супутник, Притула, ICEYE" />
          <meta name="author" content="Гривнак Катерина" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Helmet>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="history" element={<History />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
