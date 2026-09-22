//instancia de Axios global

import axios from "axios";

const URL_API = 'http://localhost:3000'

const api = axios.create({
  baseURL: URL_API,
  timeout: 5000,
});

export default api