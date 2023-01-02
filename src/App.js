import "./App.css";
import SignUp from "./SignUp/SignUp";
import Main from "./products/main";
import Main2 from "./products/main2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/ScriptMiniProject1" element={<SignUp />}/>
          <Route path="/ScriptMiniProject1/pro" element={<Main />} />
          <Route path="/ScriptMiniProject1/items" element={<Main2 />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
