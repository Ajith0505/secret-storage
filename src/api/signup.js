import axios from "./axios";

const REGISTER_URL = "/user/signup";

export const signupRequest = (username, password, email) => {

    const response = axios.post(
      REGISTER_URL,
      JSON.stringify({ username, password, email }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return response;
};
