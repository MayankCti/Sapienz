import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllStudentsByExpertAPI,
  mainDashboardAPI,
  fetchStudentByIdAPI,
} from "../../routes/endPoints";
import { API_REQUEST } from ".";

// fetch-student-list
export const fetchStudentList = createAsyncThunk(
  "fetch-student-list",
  async () => {
    try {
      const response = await API_REQUEST({
        url: fetchAllStudentsByExpertAPI,
        method: "GET",
      });
      return response;
    } catch (error) {}
  }
);

// fetch-dashboard
export const fetchDashboard = createAsyncThunk("fetch-dashboard", async () => {
  try {
    const response = await API_REQUEST({
      url: mainDashboardAPI,
      method: "GET",
    });
    return response;
  } catch (error) {}
});

// fetch-student-details
export const fetchStudentDetails = createAsyncThunk(
  "fetch-student-details",
  async (payload) => {
    try {
      const response = await API_REQUEST({
        url: fetchStudentByIdAPI + "/" + payload,
        method: "GET",
      });
      return response;
    } catch (error) {}
  }
);

// filter-students
export const filterStudents = createAsyncThunk(
  "filter-students",
  async (props) => {
    const { fromDate, toDate, status } = props;
    const params = {};
    if (fromDate) params.fromDate = fromDate;
    if (status) params.status = status;
    if (toDate) params.toDate = toDate;
    try {
      const response = await API_REQUEST({
        url: mainDashboardAPI,
        method: "GET",
        params: params,
      });
      return response;
    } catch (error) {}
  }
);
