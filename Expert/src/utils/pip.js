import moment from "moment";

// AUTHENTICATION :
export const setAuth = (token) => {
  localStorage.setItem("EXPERT-TOKEN", token);
};
export const getAuth = () => {
  return localStorage.getItem("EXPERT-TOKEN");
};
export const clearAuth = () => {
  localStorage.removeItem("EXPERT-TOKEN");
  localStorage.removeItem("EXPERT-PROFILE");
};

// Profile
export const saveProfile = (data) => {
  localStorage.setItem("EXPERT-PROFILE", JSON.stringify(data));
};
export const getProfile = () => {
  const data = JSON?.parse(localStorage.getItem("EXPERT-PROFILE"));
  return data ?? {};
};

// Capitalization
export const getCapitalization = (str) => {
  return str && str[0]?.toUpperCase() + str?.slice(1);
};

// Get Standard
export const getStandard = (value) => {
  if (!value) return;
  switch (value) {
    case "1":
      return "st Standard";
    case "2":
      return "nd Standard";
    case "3":
      return "rd Standard";
    default:
      return "th Standard";
  }
};

// Date Formate
export const getDateFormat = (date) => {
  if (!date) return;
  return moment(date).format("DD-MM-YYYY HH:mm");
};

// Get status class

export const getStatusClass = (status) => {
  if (!status) return;
  switch (status) {
    case "poor":
      return "ct_pink_bg";
    case "best":
      return "ct_cyan_bg";
    case "average":
      return "ct_yellow_bg";
  }
};
