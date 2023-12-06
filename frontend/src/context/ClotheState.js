import ClotheContext from "./clotheContext";
// eslint-disable-next-line

import React, { useState } from "react";
// import { host } from "../config";

const ClotheState = (props) => {
  const clothesInitial = [];
  const [clothes, setClothes] = useState(clothesInitial);
  const [boughts, setBoughts] = useState([]);
  const [filters, setFilters] = useState({
    gender: "",
    category: "",
    rating: "",
    fabric: "",
    size: "",
    color: "",
    discount: "",
  });

   const host = "https://trendy-backend.onrender.com"
  // const host = "http://localhost:5000"

  // fetch all notes function
  const getClothes = async () => {
    // API calls
    const response = await fetch(`${host}/api/clothes/fetchallclothes/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setClothes(json);
  };

  const toComponentB = (clothe, navigate) => {
    navigate(`/product-details`, {
      state: {
        id: clothe._id,
        image: clothe.image,
        price: clothe.price,
        title: clothe.title,
        brand: clothe.brand,
        discount: clothe.discount,
        description: clothe.description,
      },
    });
  };

  const fromCategory = (array, navigate) => {
    navigate(`/featured`, {
      state: {
        gender: array.gender,
        category: array.category,
        fabric: array.fabric,
        rating: array.rating,
        size: array.size,
        color: array.color,
        discount: array.discount,
      },
    });

    setFilters({
      gender: array.gender,
      category: array.category,
      fabric: array.fabric,
      rating: array.rating,
      size: array.size,
      color: array.color,
      discount: array.discount,
    });
  };

  const getBoughtsInfo = async () => {
    // API calls
    const response = await fetch(`${host}/api/kart/boughtInfo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setBoughts(json);
  };

  const addBoughtInfo = async (
    clothe_id,
    image,
    title,
    discount,
    price,
    type,
    quantity,
    navigate
  ) => {
    await fetch(`${host}/api/kart/addBought`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        clothe_id,
        image,
        price,
        title,
        discount,
        type,
        quantity,
      }),
    });
    navigate(`/Cart`);
  };

  const updateBought = async (id, quantity) => {
    const response = await fetch(`${host}/api/kart/updateQuantity/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ quantity }),
    });
    // eslint-disable-next-line
    const json = await response.json();

    let newBoughts = JSON.parse(JSON.stringify(boughts));

    for (let index = 0; index < newBoughts.length; index++) {
      const element = newBoughts[index];
      if (element._id === id) {
        newBoughts[index].quantity = quantity;
        break;
      }
    }
    setBoughts(newBoughts);
  };

  const deleteBought = async (_id) => {
    const response = await fetch(`${host}/api/kart/delete/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    
    // eslint-disable-next-line
    const json = await response.json();
    console.log(json)
    const newBoughts = boughts.filter((bought) => {
      return bought._id !== _id;
    });
    setBoughts(newBoughts);
  };

  return (
    <ClotheContext.Provider
      value={{
        clothes,
        filters,
        boughts,
        toComponentB,
        getClothes,
        fromCategory,
        addBoughtInfo,
        updateBought,
        getBoughtsInfo,
        deleteBought
      }}
    >
      {props.children}
    </ClotheContext.Provider>
  );
};

export default ClotheState;
