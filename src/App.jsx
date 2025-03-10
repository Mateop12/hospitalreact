import Home from "./pages/frontend/home";
import Login from "./pages/frontend/login";
import Register from "./pages/frontend/register";
import NotFound from "./pages/frontend/notFound";
import Dashboard from "./pages/admin/dashboard"
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/admin/protectedRoute";

function App() {

  return (
    <>
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/login" element={<Login />} />

       <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
        } />
        
       <Route exact path="/register" element={<Register />} />
       <Route path="*" element={<NotFound />} />
     </Routes>
    </>
  )
}

export default App
