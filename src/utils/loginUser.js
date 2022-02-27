/* Axios */
import axios from "axios";

/* Constants */
const URL = process.env.REACT_APP_LOGIN_URL;

const loginUser = async (credentials) => {
  try {
    const response = await axios.post(URL, credentials);
    return response.data.token;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 200 range
      if (error.response.status === 401) {
        throw new Error(error.response.data.error);
      }
      if (error.response.status === 404) {
        throw new Error("Page Not Found");
      }
    } else {
      throw new Error(error.message);
    }
  }
};

export default loginUser;
