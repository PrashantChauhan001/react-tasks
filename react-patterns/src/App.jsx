/* eslint-disable no-unused-vars */
// import React from "react";
import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "./constants/route.constants";
import SingletonPattern from "./singleton-pattern";

function App() {
  return (
    <Routes>
      <Route element={<MainWrapper />} path={APP_ROUTES.BASE}>
        <Route index element={<RoutesLink />} />
        <Route
          path={APP_ROUTES.SINGLETON_PATTERN}
          element={<SingletonPattern />}
        />
      </Route>
    </Routes>
  );
}

function MainWrapper() {
  return (
    <React.Fragment>
      <header>
        <div className="h1">This is header</div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>This is footer</footer>
    </React.Fragment>
  );
}

const RoutesLink = () => (
  <div className="container">
    <div className="d-flex justify-content-between align-items-center gap-2">
      <LinkContainer
        pageRoute={APP_ROUTES.SINGLETON_PATTERN}
        text="1. Singleton Pattern"
      />
    </div>
  </div>
);

const LinkContainer = ({ pageRoute, text }) => (
  <Link to={pageRoute}>
    <div className="link-container">
      <div className="link">{text}</div>
    </div>
  </Link>
);

export default App;
