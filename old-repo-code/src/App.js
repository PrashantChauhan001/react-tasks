import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPages";
import Header from "./components/header";
import Projects, { ProjectsHome } from "./pages/projects";
import InfiniteList from "./pages/projects/infiniteList";
import Footer from "./components/footer";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import UnderConstruction from "./components/underConstruction";
import Counter from "./pages/projects/counter";
import SignIn from "./pages/onBoardingPages/signIn";
import Carousal from "./pages/projects/carousal";
import { ToastContainer } from "react-toastify";
import SearchCheckList from "./pages/projects/searchFilter";

// CSS import
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7c3aed",
    },
    secondary: {
      main: "#7c3aed",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AppContainer />}>
                <Route index element={<LandingPage />} />
                <Route path="projects" element={<Projects />}>
                  <Route index element={<ProjectsHome />}></Route>
                  <Route path="infinite-list" element={<InfiniteList />} />
                  <Route path="http-call" element={<InfiniteList />} />
                  <Route path="rendered-list" element={<InfiniteList />} />
                  <Route path="counter" element={<Counter />} />
                  <Route path="carousal" element={<Carousal />} />
                  <Route path="accordion" element={<Carousal />} />
                  <Route path="search" element={<SearchCheckList />} />
                  <Route path="checklist" element={<SearchCheckList />} />
                </Route>
                <Route path="about-me" element={<UnderConstruction />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="contact-me" element={<UnderConstruction />} />
                <Route path="*" element={<UnderConstruction />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

const AppContainer = () => {
  return (
    <>
      <Header />
      <div
        style={{ minHeight: "calc(100vh - 206px)" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Outlet />
      </div>
      <Footer />
      <ToastContainer autoClose={1500} limit={1} pauseOnFocusLoss={false} />
    </>
  );
};

export default App;
