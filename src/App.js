import React, { useState, useEffect } from "react";
import axios from "axios";
import Records from "./Components/Records";
import Pagination from "./Components/Pagination";

function App() {
  // To hold the actual data
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        // setLoading(false);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
      });
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage; //10
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage; //10-10=0
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  // const nPages = Math.ceil(data.length / recordsPerPage)

  return (
    <div className="container mt-5">
      <h2> Simple Pagination Example in React </h2>
      <Records data={currentRecords} />
      <Pagination
        // nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
