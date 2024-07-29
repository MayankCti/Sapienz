import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCategoryList,
  fetchFlashCardList,
  fetchMockTestList,
  addFlashCard,
  updateFlashCard,
  deleteFlashCard,
  addMockTest,
} from "../actions/flashCardActions";

const initialState = {
  isLoading: true,
  isToggle: false,
  flashCardData: [],
  categories: [],
  mockList: [],
};

const flashCardSlice = createSlice({
  name: "flashCard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch-flash-cart-list
    builder.addCase(fetchFlashCardList.fulfilled, (state, action) => {
      const { data } = action?.payload || {};
      state.flashCardData = data ?? [];
      state.isLoading = false;
    });
    builder.addCase(fetchFlashCardList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFlashCardList.rejected, (state, action) => {
      state.isLoading = false;
    });
    // update-flash-card
    builder.addCase(updateFlashCard.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(updateFlashCard.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateFlashCard.rejected, (state, action) => {
      state.isLoading = false;
    });
    // delete-flash-card
    builder.addCase(deleteFlashCard.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(deleteFlashCard.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteFlashCard.rejected, (state, action) => {
      state.isLoading = false;
    });
    // fetch-category-list
    builder.addCase(fetchCategoryList.fulfilled, (state, action) => {
      const { data } = action?.payload || {};
      state.categories = data;
      state.isLoading = false;
    });
    builder.addCase(fetchCategoryList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategoryList.rejected, (state, action) => {
      state.isLoading = false;
    });
    // add-flash-card
    builder.addCase(addFlashCard.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(addFlashCard.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addFlashCard.rejected, (state, action) => {
      state.isLoading = false;
    });
    // add-mock-test
    builder.addCase(addMockTest.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(addMockTest.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addMockTest.rejected, (state, action) => {
      state.isLoading = false;
    });
    // fetch-mock-list
    builder.addCase(fetchMockTestList.fulfilled, (state, action) => {
      const { data } = action?.payload || {};
      state.mockList = data;
      state.isLoading = false;
    });
    builder.addCase(fetchMockTestList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMockTestList.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default flashCardSlice.reducer;
