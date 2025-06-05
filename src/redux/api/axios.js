import axios from "axios";

export const MAINURL = "https://crm-app-mtbr.onrender.com/";

const axiosInstance = axios.create({
  baseURL: MAINURL,
});

export default axiosInstance;
