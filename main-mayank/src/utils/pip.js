import moment from "moment";

// AUTHENTICATION :
export const setAuth = (token) => {
  if (!token) return;
  localStorage.setItem("MAIN-TOKEN", token);
};
export const getAuth = () => {
   const token = localStorage.getItem("MAIN-TOKEN");
   if(!token) return;
   return token;
};
export const clearAuth = () => {
  localStorage.removeItem("MAIN-TOKEN");
  localStorage.removeItem("MAIN-PROFILE");
};

// Profile
export const saveProfile = (data) => {
  localStorage.setItem("MAIN-PROFILE", JSON.stringify(data));
};
export const getProfile = () => {
  const data = JSON?.parse(localStorage.getItem("MAIN-PROFILE"));
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
