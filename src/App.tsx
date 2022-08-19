import React from 'react';
import "./App.css"
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterShopOwner from "./pages/RegisterShopOwner"
import Login from "./pages/Login"
import Shop from "./pages/Shop"
import Inventory from './pages/Inventory';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createshop" element={<RegisterShopOwner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Router>
  )
}

export default App;
