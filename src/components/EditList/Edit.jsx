import { Button, Input, Modal } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../context/ProductContext";

const Edit = () => {
  const params = useParams();
  const { getOneProduct, editProduct, saveProduct } =
    useContext(productsContext);
  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  // console.log(editProduct);

  const [editedProduct, setEditedProduct] = useState({
    image: "",
    name: "",
    description: "",
    price: "",
  });

  const handleSubmit = () => {
    saveProduct(params.id, editedProduct);
    setEditedProduct("");
  };

  useEffect(() => {
    if (editProduct) {
      setEditedProduct(editProduct);
    }
  }, [editProduct]);
  // console.log(editProduct.image);

  // console.log(editedProduct);

  return (
    <>
      <p>Редактирование товара...</p>
      <Input
        name="image"
        type="text"
        value={editedProduct.image}
        onChange={(e) =>
          setEditedProduct({ ...editedProduct, image: e.target.value })
        }
      />
      <Input
        name="name"
        type="text"
        value={editedProduct.name}
        onChange={(e) =>
          setEditedProduct({
            ...editedProduct,
            name: e.target.value,
          })
        }
      />

      <Input
        name="price"
        type="text"
        value={editedProduct.price}
        onChange={(e) =>
          setEditedProduct({
            ...editedProduct,
            [e.target.name]: e.target.value,
          })
        }
      />

      <Input
        name="description"
        type="text"
        value={editedProduct.description}
        onChange={(e) =>
          setEditedProduct({
            ...editedProduct,
            [e.target.name]: e.target.value,
          })
        }
      />
      <Button onClick={handleSubmit}>Save</Button>
    </>
  );
};

export default Edit;
