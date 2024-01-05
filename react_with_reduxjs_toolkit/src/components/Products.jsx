import React from "react";
import Product from "./Product";
import styled from "styled-components";

const productList = [
  { id: 1, name: "shirt", price: 250 },
  { id: 2, name: "shoe", price: 245 },
  { id: 3, name: "pant", price: 251 },
  { id: 4, name: "t-shirt", price: 215 },
  { id: 5, name: "heatset", price: 125 },
];

const Products = () => {
  return (
    <div>
        <h1>Products List</h1>
      <WRAPPER>
        {productList.map((product) => (
          <Product key={product.id} {...product}  />
        ))}
      </WRAPPER>
    </div>
  );
};

export default Products;

const WRAPPER = styled.div`
  display: flex;
  gap: 20px;
`;
