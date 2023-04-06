import axios from "axios";



export const axiosInstance = axios.create({
    baseURL: 'https://northwind.vercel.app/api/',
    timeout: 1000
  });

  //baseUrl tüm axiosInstance üzerinde default tanımlanan url