import axios from "axios";
import Storage from "utils/storage";
import appConfig from "config";
import history from "utils/history";

let instance;
const createInstance = () => {
  return axios.create({
    baseURL: appConfig.baseUrl
  });
};

const addInterceptors = instance => {
  instance.interceptors.request.use(
    function(config) {
      config.params = {
        ...config.params,
        apikey: appConfig.apiKey
      };
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
};

const request = () => {
  instance = createInstance();
  addInterceptors(instance);
  return {
    get,
    post,
    put,
    delete: _delete
  };
};

const get = (endpoint, params) => instance.get(endpoint, { params });
const post = (endpoint, params) => instance.post(endpoint, params);
const put = (endpoint, params) => instance.put(endpoint, params);
const _delete = (endpoint, params) => instance.delete(endpoint, params);

export default request();
