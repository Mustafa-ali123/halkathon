import { configureStore } from "@reduxjs/toolkit";
// import loginslice from "../reducer/loginslice";
// import cartSlice from "../reducer/cartSlice";

const store = configureStore({
  reducer: {
    // Login: loginslice,
    // Cart: cartSlice,
  },
});

export default store;