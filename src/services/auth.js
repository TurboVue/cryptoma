import axios from "axios";
import authHeader from "./auth_header";

const apiClient = axios.create({
    baseURL: "https://cryptoexbe.herokuapp.com/api/v1",
    withCredentials: false,
    headers: authHeader(),
});

export default {
    login(data) {
        return apiClient.post("/login", data);
    },
    register(data) {
        return apiClient.post("/register", data);
    },
    attempt(data) {
        return apiClient.post("users/user", data, { headers: authHeader() });
    },
    otp(otp) {
        const data = { otp: +otp };
        // console.log(otp);
        return apiClient.post("/complete-login", data, { headers: authHeader() });
    },
};