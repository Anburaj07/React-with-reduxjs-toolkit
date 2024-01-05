import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addProduct } from "../redux/slices/cartSlice";

const Product = ({ id, name, price }) => {
    const dispatch=useDispatch();
    const handleAddProduct=(name)=>{
        dispatch(addProduct(name))
    }
  return (
    <PRODUCT>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <div>
        <button onClick={()=>handleAddProduct(name)}>Add to Cart</button>
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
