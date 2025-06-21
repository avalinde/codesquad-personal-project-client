 import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route} from "react-router-dom";

import About from "./components/About";
import Admin from "./components/Admin";
import Contact from "./components/Contact";
import Create from "./components/Create";
import Directory from "./components/Directory";
import Home from "./components/Home";
import Login from "./components/Login";
import Update from "./components/Update";
import Register from "./components/Register";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import "./App.css";

function App() {

const [user, setUser] = useState(localStorage.getItem("user") || {});



  return (
    <div>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/clinic" element={<Clinic />} /> */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/create" element={<Create />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register user={user} setUser={setUser} />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} />
        <Route path="/update/:clinicID" element={<Update />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
