import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <DIV>
      <h1>Flipkart</h1>
      <h4>Cart 0</h4>
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
