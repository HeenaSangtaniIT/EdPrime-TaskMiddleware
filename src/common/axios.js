import axios from 'axios';

// Card Interceptor
export const apiRootCardaxios = axios.create({
  baseURL: "",
  timeout: 10000,
  params: {},
  headers: {
    appversion: "7.3",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*"
  }
})
const apiRootCardaxiosInterceptor = () => {
  apiRootCardaxios.interceptors.request.use(config => {
    // Do something before request is sent
    config.params = { ...config.params }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
}


apiRootCardaxiosInterceptor();