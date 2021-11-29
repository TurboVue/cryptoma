// import axios from "axios";
import authHeader from "./auth_header";
import Nprogress from "nprogress";
import apiClient from "./apiClient";

apiClient().interceptors.request.use(
    (config) => {
        Nprogress.start();
        return config;
    },
    function(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        Nprogress.done();
        return Promise.reject(error);
    }
);
apiClient().interceptors.response.use(
    (response) => {
        console.log("mr");
        Nprogress.done();
        return response;
    },
    function(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        Nprogress.done();
        return Promise.reject(error);
    }
);
export default {
    login(data) {
        return apiClient().post("/login", data);
    },
    register(data) {
        return apiClient().post("/register", data);
    },
    attempt(data) {
        return apiClient().post("users/user", data, { headers: authHeader() });
    },
    otp(otp) {
        const data = { otp: +otp };
        // console.log(otp);
        return apiClient().post("/complete-login", data, { headers: authHeader() });
    },
};