import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL1, fetchCategoryAPI, fetchFlashCardAPI, fetchMockTestAPI } from "../../routes/endPoints";
import { API_REQUEST } from ".";

// fetch-flash-cart-list
export const fetchFlashCardList = createAsyncThunk("fetch-flash-cart-list", async () => {
    try {
      const response = await API_REQUEST({
        url: fetchFlashCardAPI,
        method: "GET",
      });
      return response;
    } catch (error) {}
  });
  
  // fetch-category-list
  export const fetchCategoryList = createAsyncThunk("fetch-category-list", async () => {
      try {
          const response = await API_REQUEST({
              url: fetchCategoryAPI,
              method: "GET",
              BASE : BASE_URL1
            });
            return response;
    } catch (error) {}
  });

  
  // MOCK TEST : 

  // fetch-mock-list
  export const fetchMockTestList = createAsyncThunk("fetch-mock-list", async () => {
      try {
        const response = await API_REQUEST({
          url: fetchMockTestAPI,
          method: "GET",
        });
        return response;
      } catch (error) {}
    });