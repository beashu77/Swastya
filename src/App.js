import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "./Components/Products";
import Pagination from "./Components/Pagination";
import Navbar from "./Components/Navbar";
import Style from "./Components/Style.module.css";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ProductsPerPage] = useState(5);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=10")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
      });
  }, []);

  const indexOfLastRecord = currentPage * ProductsPerPage; //10
  const indexOfFirstRecord = indexOfLastRecord - ProductsPerPage; //10-10=0
  const currentProducts = data.slice(indexOfFirstRecord, indexOfLastRecord);
  // const nPages = Math.ceil(data.length / ProductsPerPage)

  return (
    <div>
      <Navbar />
      <h1 className={Style.heading}>Our Trending Products</h1>
      <Products data={currentProducts} />
      <Pagination
        // nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
