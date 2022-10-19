import axios from "axios";
import { useNavigate } from "react-router-dom";
// import jwt_decode from "jwt-decode";
// import dayjs from "dayjs";

// const baseUrl = "http://10.6.19.51:5000/"

export const instance = axios.create({
    baseURL: "http://10.6.19.51:5000/",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        // "Authorization":`Bearer ${localStorage.getItem("userToken")}`

    },
});

instance.interceptors.request.use(function (config) {
    // console.log("this is in the axios instance", localStorage.getItem("userToken"));
    const token = localStorage.getItem("userToken");
    // console.log("this is in the axios instance", token);
    const accestoken = JSON.stringify(token)
    console.log("this is in the axios instance ****", accestoken);
    const refresh = localStorage.getItem("refreshToken");
    config.headers.Authorization = "Bearer " + token;
    if (config.method != "get") {
        instance.defaults.headers.common['Content-Type'] =
            'multipart/form-data';
    }
    console.log("authenticated")

    // const user = jwt_decode(token)
    // const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    // console.log("this is in the axios instance", isExpired);
    // if (isExpired) {
    //     const response = axios.post(`http://10.6.19.51:5000/user/refresh/`, {

    //         headers: {
    //             "Access-Control-Allow-Origin": "*",
    //         },
    //         refresh: refresh
    //     });
    //     localStorage.setItem('userToken', JSON.stringify(response.access_token))
    //     config.headers.Authorization = `Bearer ${response.access_token}`
    // }

    return config

});

instance.interceptors.response.use(response => {
  
    return response;
}, async error => {
    

    if (error.response.status === 401 && error.response.data.data.message == "token expired") {
        //place your reentry code
        console.log("Un authenticated")


     
        // var axios = require('axios');
        const refreshToken = localStorage.getItem("refreshToken");



        var config = {};
        // config.headers.Authorization = "Bearer " + refreshToken;
        const originalRequest = error.config;
        originalRequest._retry = true;
        var url = 'http://10.6.19.51:5000/'

        try {
            const response = await axios.post(
                url + 'user/refresh',
                {}, {
                headers: {
                    Authorization: "Bearer " + refreshToken
                }
            }
            )
            const result = response.data
            localStorage.setItem("userToken", result.access_token)

            return instance(originalRequest);

        } catch (error) {

            // return custom error message from API if any
            if (error.response && error.response.data) {

            } else {

            }
        }

    }else if(error.response.status === 401 ) {

    }
    return error;
});
export const forminstance = instance
// export const forminstance = axios.create({
//     baseURL: "http://10.6.19.51:5000/",
//     headers: {
//         "Content-Type": "multipart/form-data",
//         "Access-Control-Allow-Origin": "*",
//         // "Authorization":`Bearer ${localStorage.getItem("userToken")}`
//     },
// });

// forminstance.interceptors.request.use(function (config) {
//     const token = localStorage.getItem("userToken");

//     if (token) config.headers.Authorization = "Bearer " + token;

//     return config;
// });