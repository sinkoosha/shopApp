import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

import prouductApi from "../../common/api/prouductApi";

const initialState = {
  currenUser: {},
  status: null,
  error: null,
};

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ username, password }) => {
    const res = await prouductApi.post(`/auth/login`, {
      username,
      password,
    });
    return res.data;
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState,

  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "successed";
        state.currenUser = action.payload;
      });
  },
});

export default UserSlice.reducer;
