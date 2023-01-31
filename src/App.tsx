import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Design from "./components/Design";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Location from "./components/Location";
import Contact from "./components/Contact";

function App() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const getDesigno = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/design");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDesigno();
  }, []);
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Design data={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
