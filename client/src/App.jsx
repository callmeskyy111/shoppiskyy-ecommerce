import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* USER LAYOUT */}
        <Route path="/" element={<UserLayout />}></Route>
        {/* ADMIN LAYOUT */}
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//todo: 01:15:14
