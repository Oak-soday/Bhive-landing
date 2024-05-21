import {useState, useEffect} from "react";

const useFetch = async (url) => {
  const fetchImage = async () => {
    try {
      const response = await fetch(`${url}`);
      return response;
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };
  fetchImage();
};

export default useFetch;
