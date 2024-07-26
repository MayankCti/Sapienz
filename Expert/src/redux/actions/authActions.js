import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_REQUEST } from ".";
import {
  changePasswordAPI,
  forgotPasswordAPI,
  loginAPI,
  signupAPI,
  profileAPI,
} from "../../routes/endPoints";
import { setAuth } from "../../utils/pip";

// auth-login
export const expertLogin = createAsyncThunk("auth-login", async (props) => {
  const { payload, callback } = props;
  try {
    const response = await API_REQUEST({
      url: loginAPI,
      method: "POST",
      data: payload,
      isErrorToast: true,
    });
    setAuth(response?.token);
    callback(response);
    return response;
  } catch (error) {
    callback(null, error);
  }
});

// auth-forgot-password
export const expertForgotPassword = createAsyncThunk(
  "auth-forgot-password",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: forgotPasswordAPI,
        method: "POST",
        data: payload,
        isErrorToast: true,
      });
      callback(response);
      return response;
    } catch (error) {
      callback(null, error);
    }
  }
);

// auth-signup
export const expertSignup = createAsyncThunk("auth-signup", async (props) => {
  const { payload, callback } = props;
  try {
    const response = await API_REQUEST({
      url: signupAPI,
      method: "POST",
      data: payload,
    });
    callback(response);
    return response;
  } catch (error) {
    callback(null, error);
  }
});

// auth-change-password
export const expertChangePassword = createAsyncThunk(
  "auth-change-password",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: changePasswordAPI,
        method: "POST",
        data: payload,
        isErrorToast: true,
      });
      callback(response);
      return response;
    } catch (error) {
      callback(null, error);
    }
  }
);

// fetch-profile
export const fetchProfile = createAsyncThunk("fetch-profile", async () => {
  try {
    const response = await API_REQUEST({
      url: profileAPI,
      method: "GET",
    });
    return response;
  } catch (error) {}
});

// update-profile
export const updateProfile = createAsyncThunk(
  "update-profile",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: profileAPI,
        method: "PATCH",
        data: payload,
        isErrorToast: true,
      });
      callback(response);
      return response;
    } catch (error) {
      callback(null, error);
    }
  }
);
