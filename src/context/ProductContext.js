import axios from "axios";
import React, { createContext, useReducer, useState } from "react";

export const productsContext = createContext();

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: [],
  editProduct: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "EDIT_TODO":
      console.log(action);
      return { ...state, editProduct: action.payload };
    default:
      return state;
  }
};
const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  console.log(state);
  const getProducts = async () => {
    const { data } = await axios(API + window.location.search);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
  const addProducts = (newProduct) => {
    axios.post(API, newProduct);
    getProducts();
  };

  async function clickDelete(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  const getOneProduct = async (id) => {
    let { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "EDIT_TODO",
      payload: data,
    });
  };

  const saveProduct = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  };

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        editProduct: state.editProduct,
        getProducts,
        addProducts,
        clickDelete,
        getOneProduct,
        saveProduct,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductContextProvider;
