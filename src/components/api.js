import axios from "axios"

const endpoint = "https://users.licensespring.com"

const getPath = url => `${endpoint}${url}`

const api = {
  get: (url, config = undefined) => {
    const token = JSON.parse(localStorage.getItem("isLoggedIn"))
    if (!config) {
      config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    } else if (config && !config.headers) {
      config.headers = {
        Authorization: `Token ${token}`,
      }
    }
    return axios.get(getPath(url), config)
  },
  post: (url, data = undefined, config = undefined) => {
    const token = JSON.parse(localStorage.getItem("isLoggedIn"))
    if (!config) {
      config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    } else if (config && !config.headers) {
      config.headers = {
        Authorization: `Token ${token}`,
      }
    }
    return axios.post(getPath(url), data, config)
  },
  patch: (url, data, config) => axios.patch(getPath(url), data, config),
  put: (url, data, config) => axios.put(getPath(url), data, config),
  // delete: (url, config = undefined) => axios.delete(getPath(url), config),
  delete: (url, config = undefined) => {
    const token = JSON.parse(localStorage.getItem("isLoggedIn"))
    if (!config) {
      config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    } else if (config && !config.headers) {
      config.headers = {
        Authorization: `Token ${token}`,
      }
    }
    return axios.delete(getPath(url), config)
  },
}

export default api
