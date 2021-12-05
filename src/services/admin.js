import authHeader from "./auth_header";
import apiClient from "./apiClient";

export default {
    getAllMarketStocks() {
        return apiClient().get("/show-market", { headers: authHeader() });
    },
    fundWallet(data) {
        return apiClient().post("/fund-wallet", data, { headers: authHeader() });
    },
    completeFunding(data, token) {
        return apiClient().patch("/complete-funding", data, {
            headers: { Authorization: `Bearer ${token}` },
        });
    },
    getAllBtcTrades() {
        return apiClient().get('/users/proofs-all', { headers: authHeader() })
    },
    getAllUsers() {
        return apiClient().get('/admin/all-users', { headers: authHeader() })
    },
    getAllNames() {
        return apiClient().get('/cardnames', { headers: authHeader() })
    },
    getAllCards() {
        return apiClient().get('/cards', { headers: authHeader() })
    },
    getAllProofs() {
        return apiClient().get()
    },
    addCard(data) {
        return apiClient(data).post(`/cards`, data, { headers: authHeader() })
    },
};