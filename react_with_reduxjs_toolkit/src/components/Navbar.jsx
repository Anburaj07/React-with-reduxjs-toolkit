import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearCart } from "../redux/slices/cartSlice";

const Navbar = () => {
  const cartProducts = useSelector((store) => store.cart.products);
  console.log("cartProducts:", cartProducts);
  const dispatch = useDispatch();
  const clearCartProducts = () => {
    dispatch(clearCart());
  };
  return (
    <DIV>
      <h1>Flipkart</h1>
      <div>
        <h4>Cart {cartProducts.length}</h4>
        <button onClick={clearCartProducts}>cleart cart</button>
      </div>
    </DIV>
  );
};

export default Navbar;
const DIV = styled.div`
  border: 2px solid blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1%;
`;
