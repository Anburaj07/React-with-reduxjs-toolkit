import React from 'react'

const productList=[
    {id:1,name:"shirt",price:250},
    {id:2,name:"shoe",price:245},
    {id:3,name:"pant",price:251},
    {id:4,name:"t-shirt",price:215},
    {id:5,name:"heatset",price:125}
];

const Products = () => {

  return (
    <div>
        {productList.map((product)=>(
            <div></div>
        ))}
    </div>
  )
}

export default Products