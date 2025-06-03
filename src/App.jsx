import { useState } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CommonLayout from "./components/commonLayout/CommonLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
