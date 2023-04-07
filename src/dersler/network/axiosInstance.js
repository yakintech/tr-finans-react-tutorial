import axios from "axios";


// let token = localStorage.getItem('token');

export const axiosInstance = axios.create({
    baseURL: 'https://northwind.vercel.app/api/',
    timeout: 1000,
    //  headers: {'Auth': 'Bearer ' + token}
  });

  //baseUrl tüm axiosInstance üzerinde default tanımlanan url