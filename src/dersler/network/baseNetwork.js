import axios from "axios"
import { axiosInstance } from "./axiosInstance";

//js objeleri içerisinde function da barındırabilir

export const baseNetwork = {

    //entityUrl -> categories, suppliers vb. ...
    getAll: async (entityUrl) => {
        let responseData = [];

        // let token = localStorage.getItem('token');

        // axios.get('/api/customers', {
        //     headers:{
        //         'authorization': `Bearer ` + token
        //     }
        // })

        //await anahtar kelimesi ile asenkron fonksiyonu "senkronlaştırıyorum"
        await axiosInstance
            .get(entityUrl)
            .then(res => {
                responseData = res.data;
            })

        return responseData;

    },

    //entityUrl -> categories, suppliers vb....
    //id 4,5,6
    getById: async (entityUrl, id) => {

        let responseData = {}
        await axiosInstance.get(entityUrl + "/" + id)
            .then(res => {
                responseData = res.data;
            });

        return responseData;

    },

    //entityurl -> products, suppliers vb.
    add: async (entityUrl, data) => {

        let response = {};

        await axiosInstance.post(entityUrl, data)
            .then(res => {
                let response = res.data;
            });

        return response;

    },

    delete: async (entityUrl, id) => {

        let response = {}

        await axiosInstance.delete(entityUrl + "/" + id)
            .then(res => {
                response = entityUrl;
            })

        return response;

    }
}





