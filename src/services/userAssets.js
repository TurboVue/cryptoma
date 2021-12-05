import authHeader from "./auth_header";
// import Nprogress from "nprogress";
import apiClient from "./apiClient";
export default {
    getBanks() {
        return apiClient().get("/banks", { headers: authHeader() });
    },
    verifyBankDetails(data) {
        return apiClient().post("/banks", data, { headers: authHeader() });
    },
    uploadPaymentDetails(data) {
        return apiClient().post("/users/account", data, { headers: authHeader() });
    }
}