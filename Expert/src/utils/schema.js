import * as Yup from "yup";

// Sign-Up
export const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter a valid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
      "Please enter a valid email address"
    ),
  user_name: Yup.string()
    .required("Please enter user name")
    .min(3, "User name must be at least 3 characters long")
    .max(20, "User name cannot be more than 20 characters long")
    .matches(
      /^[a-zA-Z0-9\s]+$/,
      "Name can only contain alphanumeric characters and spaces"
    ),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password cannot be less then 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
      "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
    ),
});

// Sign-In
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter a valid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
      "Please enter a valid email address"
    ),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password cannot be less then 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
      "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
    ),
});

// Forgot-Password
export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter a valid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
      "Please enter a valid email address"
    ),
});

// Change-Password
export const changePasswordSchema = Yup.object().shape({
  old_password: Yup.string()
    .required("Please enter your current password")
    .min(8, "Current Password cannot be less then 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
      "Please enter a valid password"
    ),
    new_password: Yup.string()
    .required("Please enter new password")
    .min(8, "New Password cannot be less then 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
      "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
    ),
    confirm_password: Yup.string()
    .required("Please enter confirm password")
    .oneOf([Yup.ref("new_password"), null], "Your password must match"),
});