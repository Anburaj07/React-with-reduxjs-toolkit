import React from "react";
import Product from "./Product";
import styled from "styled-components";
import { useGetProductsQuery } from "../redux/slices/productApi";

const Products = () => {
  const { data: productList, isLoading, isSuccess } = useGetProductsQuery();
  return (
    <div>
      <h2 style={{color:"#8f1280",textAlign:"center"}}>Products List</h2>
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
  padding-bottom: 140px;
  h1{
    color: rosybrown;
  }
`;
