import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const RoutesComponent = () => {
  return (
    <React.Suspense fallback={<h1>loading...</h1>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default RoutesComponent;
