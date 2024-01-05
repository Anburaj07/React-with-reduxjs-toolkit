import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const cartProducts = useSelector((store) => store.cart.products);
  console.log("cartProducts:", cartProducts);
  const dispatch = useDispatch();
  const clearCartProducts = () => {
    dispatch(clearCart());
  };
  const naviagte=useNavigate();
  return (
    <DIV>
      <div>
        <h2 onClick={()=>naviagte("/")}>Flipkart</h2>
        <button onClick={()=>naviagte("/add")}>Create Product+</button>
      </div>
      <div>
        <h4>Cart {cartProducts.length}</h4>
        <button onClick={clearCartProducts}>cleart cart</button>
      </div>
    </DIV>
  );
};

export default Navbar;
const DIV = styled.div`
  /* border-bottom: 2px solid blue; */
  background-color: #0093E9;
background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h2,h4{
    color: #ae0d9c;
  }
  button{
    background: none;
    color: #0e0d0d;
  }
`;
