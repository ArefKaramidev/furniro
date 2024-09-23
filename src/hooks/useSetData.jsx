import { useEffect, useState } from "react";

let productSavedData = JSON.parse(localStorage.getItem("productData")) || [];
let test = [];
const useSetData = (data) => {
  useEffect(() => {
    test = [...productSavedData, data];
    console.log(test);

    // localStorage.setItem("productData", JSON.stringify(productSavedData));
  }, []);
};

export default useSetData;
