import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  BASE_URL1,
  createFlashCardAPI,
  fetchCategoryAPI,
  fetchFlashCardAPI,
  fetchMockTestAPI,
  editFlashCardAPI,
  deleteFlashCardAPI,
  createMockTestAPI,
  mockTestVisibilityAPI
} from "../../routes/endPoints";
import { API_REQUEST } from ".";

// fetch-flash-cart-list
export const fetchFlashCardList = createAsyncThunk(
  "fetch-flash-cart-list",
  async () => {
    try {
      const response = await API_REQUEST({
        url: fetchFlashCardAPI,
        method: "GET",
      });
      return response;
    } catch (error) {}
  }
);
// add-flash-card
export const addFlashCard = createAsyncThunk(
  "add-flash-card",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: createFlashCardAPI,
        method: "POST",
        data: payload,
      });
      callback(response);
      return response;
    } catch (error) {}
  }
);
// update-flash-card
export const updateFlashCard = createAsyncThunk(
  "update-flash-card",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: editFlashCardAPI,
        method: "POST",
        data: payload,
      });
      callback(response);
      return response;
    } catch (error) {}
  }
);
// delete-flash-card
export const deleteFlashCard = createAsyncThunk(
  "delete-flash-card",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: deleteFlashCardAPI,
        method: "DELETE",
        data: payload,
      });
      callback(response);
      return response;
    } catch (error) {}
  }
);
// fetch-category-list
export const fetchCategoryList = createAsyncThunk(
  "fetch-category-list",
  async () => {
    try {
      const response = await API_REQUEST({
        url: fetchCategoryAPI,
        method: "GET",
        BASE: BASE_URL1,
      });
      return response;
    } catch (error) {}
  }
);

// MOCK TEST :

// add-mock-list
export const addMockTest = createAsyncThunk(
  "add-mock-list",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: createMockTestAPI,
        method: "POST",
        data: payload,
      });
      callback(response);
      return response;
    } catch (error) {}
  }
);


// fetch-mock-list
export const fetchMockTestList = createAsyncThunk(
  "fetch-mock-list",
  async () => {
    try {
      const response = await API_REQUEST({
        url: fetchMockTestAPI,
        method: "GET",
      });
      return response;
    } catch (error) {}
  }
);

// update-mock-test-status
export const updateMockTestStatus = createAsyncThunk(
  "update-mock-test-status",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: mockTestVisibilityAPI,
        method: "POST",
        data: payload,
      });
      callback(response);
      return response;
    } catch (error) {}
  }
);