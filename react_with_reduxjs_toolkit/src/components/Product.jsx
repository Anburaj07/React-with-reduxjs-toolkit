import React from "react";
import styled from "styled-components";

const Product = ({ id, name, price }) => {
  return (
    <PRODUCT>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <div>
        <button>+</button>
        <button> Delete</button>
        <button> Edit</button>
      </div>
    </PRODUCT>
  );
};

export default Product;

const PRODUCT = styled.div`
  border: 1px solid gray;
  padding: 10px;
  div {
    display: flex;
    gap: 4px;
  }
`;
