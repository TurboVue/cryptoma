import store from "@/store";
import axios from "axios";
store.subscribe((mutation) => {
  switch (mutation.type) {
    case "auth/SET_TOKEN":
      if (mutation.payload) {
        console.log(mutation.payload);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${mutation.payload.token}`;
        let data = mutation.payload;
        let myJson = JSON.stringify(data);
        localStorage.setItem("user", myJson);
      } else {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${mutation.payload.token}`;
        localStorage.removeItem("user");
      }

      break;

    case "product/ADD_PRODUCTS":
      if (mutation.payload) {
        let user = JSON.parse(localStorage.getItem("user"));

        axios.defaults.headers.common["Authorisation"] = `Bearer ${user.token}`;
      } else {
      }

      break;
    default:
      break;
  }
});
