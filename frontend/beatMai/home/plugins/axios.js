// plugins/axios.js
export default ({ $axios }) => {
    // Set baseURL for API requests
    $axios.defaults.baseURL = "http://127.0.0.1:8000";
  
    // Interceptors for request and response
    $axios.onRequest((config) => {
      // Modify request config if needed
      return config;
    });
  
    $axios.onResponse((response) => {
      // Handle response data if needed
      return response.data;
    });
  
    $axios.onError((error) => {
      // Handle errors if needed
      return Promise.reject(error);
    });
  };
  