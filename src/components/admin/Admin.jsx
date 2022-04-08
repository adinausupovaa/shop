import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../context/ProductContext";
import "./Admin.css";

const Admin = () => {
  const { getProducts, addProducts } = useContext(productsContext);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  function handleClick() {
    let newProduct = {
      image: image,
      name: name,
      price: price,
      description: description,
      id: Date.now(),
    };
    addProducts(newProduct);
    setImage("");
    setName("");
    setDescription("");
    setPrice("");
  }

  return (
    <div className="admin">
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Admin;
