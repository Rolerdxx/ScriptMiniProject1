import "./App.css";
import SignUp from "./SignUp/SignUp";
import Main from "./products/main";
import Main2 from "./products/main2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<SignUp />} />
          <Route path="/pro" element={<Main />} />
          <Route path="/items" element={<Main2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
