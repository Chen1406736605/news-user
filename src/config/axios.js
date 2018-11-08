import axios from 'axios';

axios.defaults.baseURL = '/api/v1';
axios.defaults.timeout = 5000;

axios.interceptors.request.use(
  config => {
    // if (store.state.user.token) {
    //   config.headers.Authorization = `Bearer ${store.state.user.token}`
    // }
    return config
  }
)

axios.interceptors.response.use(
  response => {
    return response;
  },

  error => {
    // this.$message.error(error.response.data.message)
    return error
  }
)

export default axios;