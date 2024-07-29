import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    fetchAllStudentsByExpertAPI,
    expertDashboardAPI,
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
export const fetchDashboard = createAsyncThunk(
    "fetch-dashboard",
    async () => {
      try {
        const response = await API_REQUEST({
          url: expertDashboardAPI,
          method: "GET",
        });
        return response;
      } catch (error) {}
    }
  );
  