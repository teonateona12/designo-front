import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState<any>([]);
  const res = data.find((item: any) => item.category === "web design");
  // useEffect(() => {
  //   const getDesigno = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/design");
  //       setData(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getDesigno();
  // }, []);
  console.log(data);
  return (
    <div>
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
