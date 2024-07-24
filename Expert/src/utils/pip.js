// AUTHENTICATION :
export const setAuth = (saveFor, token) => {
  switch (saveFor) {
    case "STUDENT":
      localStorage.setItem("STUDENT-TOKEN", token);
      break;
    case "EXPERT":
      localStorage.setItem("EXPERT-TOKEN", token);
      break;
    case "MAIN":
      localStorage.setItem("MAIN-TOKEN", token);
      break;
    default:
      break;
  }
};

export const getAuth = (getFor) => {
  switch (getFor) {
    case "STUDENT":
      return localStorage.getItem("STUDENT-TOKEN");
    case "EXPERT":
      return localStorage.getItem("EXPERT-TOKEN");
    case "MAIN":
      return localStorage.getItem("MAIN-TOKEN");
    default:
      return null;
  }
};

export const clearAuth = (clearFor) => {
  switch (clearFor) {
    case "STUDENT":
      localStorage.removeItem("STUDENT-TOKEN");
      localStorage.removeItem("STUDENT-PROFILE");
      break;
    case "EXPERT":
      localStorage.removeItem("EXPERT-TOKEN");
      localStorage.removeItem("EXPERT-PROFILE");
      break;
    case "MAIN":
      return localStorage.removeItem("MAIN-TOKEN");
      return localStorage.removeItem("MAIN-PROFILE");
      break;
    default:
      return null;
  }
};

export const saveProfile = (saveFor, data) => {
  switch (saveFor) {
    case "STUDENT":
      return localStorage.setItem("STUDENT-PROFILE", data);
    case "EXPERT":
      return localStorage.setItem("EXPERT-PROFILE", JSON.stringify(data));
    case "MAIN":
      return localStorage.setItem("MAIN-PROFILE", data);
    default:
      return null;
  }
};

export const getProfile = (getFor) => {
  switch (getFor) {
    case "STUDENT":
      return JSON.parse(localStorage.getItem("STUDENT-PROFILE"));
    case "EXPERT":
      return JSON?.parse(localStorage.getItem("EXPERT-PROFILE"));
    case "MAIN":
      return JSON.parse(localStorage.getItem("MAIN-PROFILE"));
    default:
      return null;
  }
};
