import axios, { AxiosInstance } from 'axios';
import { getAccessToekn } from '../AuthService';
import { store } from '../../store';

const HTTP_CLIENT: AxiosInstance = axios.create({
  baseURL: "https://slo3qlijs5.execute-api.us-east-2.amazonaws.com/dev",
});

const initialConfig = () => {
  setupAxios();

};

const setupAxios = () => {
  HTTP_CLIENT.interceptors.request.use(
    (config: any) => {
      const { user } = store.getState().user;
      // const { user } = store.getState().root.user;

      if (user && user?.access) {
        config.headers.Authorization = `Bearer ${user.access}`;
      }
      return config;
    },
    (err: any) => {
      Promise.reject(err);

    },
  );
};

HTTP_CLIENT.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log("error found", error.response);
      const { user } = store.getState().user;
      const parms = {
        refresh: user.refresh
      }
      // getAccessToekn(parms).then((res) => {
      //   console.log(res, 'redd token');

      // }).catch((err) => {
      //   console.log(err, 'founndded');

      // }
      // )

    }
    return Promise.reject(error);
  }
);

export { HTTP_CLIENT, setupAxios, initialConfig };

