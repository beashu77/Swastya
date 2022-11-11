import React from "react";
import Style from "./Style.module.css";
const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  // const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
//console.log(nPages)
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      <ul >
      
          <button onClick={prevPage} href="#">
            Previous
          </button>
       <>
        {/* {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item ${currentPage === pgNumber ? 'active' : ''} `} >

                        <button onClick={() => setCurrentPage(pgNumber)}  
                            className='page-link' 
                            href='#'>
                            
                            {pgNumber}
                        </button>
                    </li>
                ))} */}
                </>
          <button className="page-link" onClick={nextPage} href="#">
            Next
          </button>
     
      </ul>
    </nav>
  );
};

export default Pagination;
