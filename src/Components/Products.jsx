import React from "react";
import Style from "./Style.module.css";
const Products = ({ data ,handleCart}) => {


  
  return (
    <div className={Style.ProductConatiner}>
    {data.length >0 ?  <div className={Style.ProductBox}>
  
   
      {data.map((item) => (
        <div key={item.id}>
        <img alt={item.title} src={item.image} style={{height:'100px'}}/> 
          <p >{item.title} </p>
          <p >${item.price} </p>
          <button onClick={()=>{handleCart(item)}}>Add</button>
        </div>
      ))}
   
  </div> :<>No Products</>}
  </div>
  );
};

export default Products;
