
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from "./pages/Register"
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';

function App() {

return(

<>


<Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={<Home />}
            // Only allow authenticated users to access client site
          />


          <Route
            path="/admin"
            element={<AdminLogin />}
            // Only allow admins to access admin dashboard
          />
        </Routes>
      </Router>


</>

)

 
  
}

export default App
