import React from "react";

const Records = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td style={{borderBottom:'1px solid lightgrey'}}>{item.id} </td>
            <td style={{borderBottom:'1px solid lightgrey'}}><img style={{height:'50px',width:'50px',borderRadius:'50%'}} src={item.image}/> </td>
            <td style={{borderBottom:'1px solid lightgrey'}}>{item.title} </td>
            <td style={{borderBottom:'1px solid lightgrey'}}>{item.price} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Records;
