import axios from "axios";
import authHeader from "./auth_header";
// import apiClient from "./apiClient";

export default function apiClient() {
    const api = axios.create({
        baseURL: "https://cryptoexbe.herokuapp.com/api/v1",
        withCredentials: false,
        headers: authHeader(),
    });
    return api;
}