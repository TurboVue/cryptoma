import store from "@/store";
//   import axios from 'axios'
store.subscribe((mutation) => {
  switch (mutation.type) {
    case "auth/SET_TOKEN":
      console.log("hi " + mutation.payload);
      if (mutation.payload) {
        console.log(mutation.payload);

        let data = mutation.payload;
        let myJson = JSON.stringify(data);
        sessionStorage.setItem("token", myJson);
      } else {
        //   axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload.token}`;
        sessionStorage.removeItem("token");
      }

      break;

    default:
      break;
  }
});
