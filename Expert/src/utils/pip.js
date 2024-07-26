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

export const saveProfile = (data) => {
  localStorage.setItem("EXPERT-PROFILE", JSON.stringify(data));
};

export const getProfile = () => {
  const data = JSON?.parse(localStorage.getItem("EXPERT-PROFILE"));
  return data;
};

export const getCapitalization = (str) => {
  return str && str[0]?.toUpperCase() + str?.slice(1);
};
