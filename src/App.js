import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Wellcome from "./pages/Wellcome";
import Test from "./pages/Test";
import Dashboard from "./pages/dashboard/Dashboardshared";
import Homedash from "./pages/dashboard/Homedash";

import Skills from "./pages/dashboard/Skills";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wellcome />} />
          <Route path={"/dashboard "} element={<Test />} />
          {/* admin troop */}
          <Route path={"/dashboard"} element={<Dashboard />}>
            <Route index element={<Homedash />} />
            <Route path="/dashboard/skills" element={<Skills />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
