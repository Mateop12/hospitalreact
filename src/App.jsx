import Home from "./pages/frontend/home";
import Login from "./pages/frontend/login";
import Register from "./pages/frontend/register";
import NotFound from "./pages/frontend/notFound";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/login" element={<Login />} />
       <Route exact path="/register" element={<Register />} />
       <Route path="*" element={<NotFound />} />
     </Routes>
    </>
  )
}

export default App
