import React from "react";

export default function Product(props) {
  return (
    <div className="product">
      <img src={props.img_url} alt="pes" />
      <div className="name">{props.name}</div>
    </div>
  );
}
