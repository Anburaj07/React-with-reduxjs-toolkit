import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  useAddProductMutation,
  useEditProductMutation,
  useGetProductByIdQuery,
} from "../redux/slices/productApi";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
  });

  //editing
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);
  const [editProduct]=useEditProductMutation()

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      setProduct({ ...data });
    } else {
      setIsEditing(false);
    }
  }, [id, data]);

  const navigate = useNavigate();

  // adding
  const [addProduct] = useAddProductMutation();

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name == "price") {
      value = Number(value);
    }
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    if (isEditing) {
        editProduct(product)
      alert("Product Updated successfully!");
    } else {
      addProduct(product);
      alert("Product Added to list");
    }
    setIsEditing(false);
    navigate("/");
  };
  const { name, price } = product;
  return (
    <DIV>
      <form onSubmit={handleSubmit}>
        <h2> {isEditing ? "Edit" : "Add"} Product</h2>
        <div>
          <label>Product name</label>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </div>
        <div>
          <label>Product Price</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">{isEditing ? "Edit" : "Add"} Product</button>
        </div>
      </form>
    </DIV>
  );
};

export default AddProduct;

const DIV = styled.div`
  padding: 2%;
  margin-top: 30px;
  padding-bottom: 250px;
  form {
    width: 90%;
    margin: auto;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #fbe7e7;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 20px;
    input {
      background-color: white;
      color: black;
      margin-left: 10px;
    }
    label{
        font-weight: 500;
    }
  }
`;
