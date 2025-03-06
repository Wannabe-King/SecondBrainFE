import "./App.css";
import { SignIn, SignUp } from "./pages/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
