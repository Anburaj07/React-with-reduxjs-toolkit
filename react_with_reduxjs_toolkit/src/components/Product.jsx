import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addProduct } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { useDeleteProductMutation } from "../redux/slices/productApi";

const Product = ({ id, name, price }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteProduct] = useDeleteProductMutation();

  const handleAddProduct = (name) => {
    dispatch(addProduct(name));
  };
  return (
    <PRODUCT>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <div>
        <button onClick={() => handleAddProduct(name)}>Add to Cart</button>
        <button onClick={() => deleteProduct(id)}> Delete</button>
        <button onClick={() => navigate(`/edit/${id}`)}> Edit</button>
      </div>
    </PRODUCT>
  );
};

export default Product;

const PRODUCT = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  background-color: #fbe7e7;
  padding: 15px;
  div {
    display: flex;
    gap: 4px;
  }
`;
