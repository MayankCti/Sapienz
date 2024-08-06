import { createSlice } from "@reduxjs/toolkit";
import {
  expertChangePassword,
  expertForgotPassword,
  mainLogin,
  expertSignup,
  fetchProfile,
  updateProfile,
} from "../actions/authActions";
import { clearAuth, saveProfile } from "../../utils/pip";

const initialState = {
  isLoading: false,
  isToggle: false,
  profile: {},
};

export const authSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    toggleChange: (state, action) => {
      state.isToggle = action?.payload;
    },
    handleLogout: (state, action) => {
      state.isLogin = action?.payload;
      clearAuth();
    },
  },
  extraReducers: (builder) => {
    // auth-login
    builder.addCase(mainLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(mainLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLogin = true;
    });
    builder.addCase(mainLogin.rejected, (state, action) => {
      state.isLoading = false;
    });

    // auth-signup
    builder.addCase(expertSignup.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(expertSignup.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(expertSignup.rejected, (state, action) => {
      state.isLoading = false;
    });

    // auth-change-password
    builder.addCase(expertChangePassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(expertChangePassword.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(expertChangePassword.rejected, (state, action) => {
      state.isLoading = false;
    });

    // auth-forgot-password
    builder.addCase(expertForgotPassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(expertForgotPassword.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(expertForgotPassword.rejected, (state, action) => {
      state.isLoading = false;
    });

    // fetch-profile
    builder.addCase(fetchProfile.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      const { data, success } = action?.payload ?? {};
      state.profile = success ? data : {};
      if (success) {
        saveProfile(data);
      }
      state.isLoading = false;
    });
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.isLoading = false;
    });

    // update-profile
    builder.addCase(updateProfile.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});
export const { toggleChange, handleLogout } = authSlice.actions;
export default authSlice.reducer;
