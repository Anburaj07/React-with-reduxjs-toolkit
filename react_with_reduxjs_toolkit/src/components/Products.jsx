import React from "react";
import Product from "./Product";
import styled from "styled-components";
import { useGetProductsQuery } from "../redux/slices/productApi";

const Products = () => {
  const { data: productList, isLoading, isSuccess } = useGetProductsQuery();
  return (
    <div>
      <h1>Products List</h1>
      {isLoading}
      <WRAPPER>
        {isLoading && <h1>Loading...</h1>}
        {productList?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </WRAPPER>
    </div>
  );
};

export default Products;

const WRAPPER = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
  padding: 10px;
  /* border: 1px solid black; */
`;
