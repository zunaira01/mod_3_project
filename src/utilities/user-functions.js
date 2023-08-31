import axios from "axios";

export const signUp = async (formData) => {
  let serverResponse = await axios({
    method: "POST",
    url: "/register",
    data: formData,
  });

  return serverResponse;
};

export const logInForm = async (formData) => {
  let serverResponse = await axios({
    method: "PUT",
    url: "/components/login_form",
    data: formData,
  });

  return serverResponse;
};

export const getUserFromSession = async () => {
  let response = await axios("/session_info");
  if (response.data.session.passport) {
    let user = response.data.session.passport.user;
    return user;
  } else {
    return false;
  }
};

export const logOut = async () => {
  try {
    let serverResponse = await axios({
      method: "POST",
      url: "/logout",
      withCredentials: true,
    });
    return serverResponse;
  } catch (error) {
    console.error(error);
  }
};