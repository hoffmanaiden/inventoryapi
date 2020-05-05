import axios from "axios";

export function setTokenHeader(token){
  if(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"]
  }
}

export function apiCall(method, path, data){
  return new Promise((resolve, reject) => {
    return axios[method](path, data)
      .then(res => {
        if(res.data){
          return resolve(res.data)
        } else {
          return resolve(res.status)
        }
      })
      .catch(err => reject(err.response.data.error));
  });
}