import { Routes, Route } from "react-router-dom";
// import PrivateRoute from "./middleware/privateRoute";
import Home from "./pages/homePage";
import Landing from "./pages/landingPage";
import Login from "./pages/loginPage";

import Register from "./pages/registerPage";

import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default App;
