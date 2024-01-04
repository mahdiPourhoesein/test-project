import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../redux";
const API = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "Content-Type": "multipart/form-data",
    }
});
API.interceptors.request.use(function (config) {
    config.headers.Authorization = `JWT ${localStorage.getItem("accessToken")}`
    return config
})
API.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
      const dispatch = useDispatch()
      if (err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
  
          try {
            const refresh = localStorage.getItem("refreshToken");
            refresh && dispatch(authActions.postRefreshToken({refresh: refresh}));
            API.defaults.headers.common["JWT"] = localStorage.getItem("accessToken");
  
            return API(originalConfig);
          } catch (_error: any) {
            if (_error.response && _error.response.data) {
              return Promise.reject(_error.response.data);
            }
  
            return Promise.reject(_error);
          }
        }
  
        if (err.response.status === 403 && err.response.data) {
          return Promise.reject(err.response.data);
        }
      }
  
      return Promise.reject(err);
    }
  );
export default API