import React from "react";

const Child1 = ({ firstV, secV, first, sec}) => {
  const add = Number(first) + Number(sec);
  return (
    <div style={{ border: "1px solid", width: "300px", height: "200px" }}>
      <h1>Child1</h1>
      <input
        onChange={(e) => {
          firstV(e.target.value);
        
        }}
      />
      <br />
      <input
        onChange={(e) => {
          secV(e.target.value);
        
     
        }}
      />
      <p>Addination:{!add ?"" :add}</p>
    </div>
  );
};

export default Child1;
