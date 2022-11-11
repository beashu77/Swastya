import React from "react";
import Style from "./Style.module.css";
const Products = ({ data }) => {
  return (
    <div className={Style.ProductConatiner}>
    {data.length >0 ?  <table className={Style.table}>
    <thead >
      <tr>
        <th>ID</th>
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td >{item.id} </td>
          <td ><img alt={item.title} src={item.image}/> </td>
          <td >{item.title} </td>
          <td >${item.price} </td>
        </tr>
      ))}
    </tbody>
  </table> :<>No Products</>}
  </div>
  );
};

export default Products;
