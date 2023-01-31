import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Design from "./components/Design";
import { Route, Routes, useParams } from "react-router-dom";

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
