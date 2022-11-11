import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  // const [data, setData] = useState({
  //   nameLabel: true,
  //   numberLabel: true,

  // });

  // setData({ ...data, nameLabel: false })
  // console.log(data)

  const [first, setFirst] = useState();
  const [sec, setSec] = useState();
  const add = Number(first) + Number(sec);

  // console.log(typeof first, typeof sec, first, sec);

  return (
    <>
      <h1>Parent</h1>
      <div style={{ display: "flex", gap: "25px" }}>
        <div>
          <Child1 firstV={setFirst} secV={setSec} first={first} sec={sec} />
        </div>
        <div>
          <Child2 first={first} sec={sec} add={add}/>
        </div>
      </div>
    </>
  );
};

export default Parent;


