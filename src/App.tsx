import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import Memo from "./components/memo/Memo";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/memo" element={<Memo />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
