import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { CriarAviso } from "./pages/CriarAviso";
import { Login } from "./pages/Login";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>

        <Route path="/home" element={<Home/>}/>
        <Route path="/criarAviso" element={<CriarAviso/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
