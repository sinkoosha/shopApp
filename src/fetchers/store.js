import { configureStore } from "@reduxjs/toolkit";
import prouductsSlice from "./prouduct/prouductsSlice";
import UserSlice from "./User/UserSlice";

export default configureStore({
  reducer: { products: prouductsSlice, UserSlice },
});
