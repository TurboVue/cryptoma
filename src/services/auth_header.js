export default function authHeader() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    // console.log(token);
    if (token) {
        // for Node.js Express back-end
        return {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        };
    }
    return {
        Accept: "application/json",
        "Content-Type": "application/json",
    };
}