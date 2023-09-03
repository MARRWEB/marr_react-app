export const checkLoginState = () => {
  const token = localStorage.getItem("userToken");
  return token ? true : false;
};
