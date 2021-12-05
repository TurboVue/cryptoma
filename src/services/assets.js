import authHeader from "./auth_header";
// import Nprogress from "nprogress";
import apiClient from "./apiClient";
export default {
    getMyProofs(){
        return apiClient().get("users/proofs", { headers: authHeader() });
    }
}