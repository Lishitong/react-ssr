import axios from 'axios'

// 简单处理

let axiosInstance = axios.create({
  baseURL: 'http://localhost:9093',
});

axiosInstance.interceptors.request.use(config=>{
  return config
})

axiosInstance.interceptors.response.use(data=> {
  return data;
}, err=> {
  return Promise.resolve(err);
})

export default axiosInstance