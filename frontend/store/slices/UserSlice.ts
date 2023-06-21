"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  token: string | null;
}

const initialState: User = {
  firstName: "",
  lastName: "",
  email: "",
  token: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state = initialState;
    },
    login: (state, action: PayloadAction<User>) => {
      console.log(action.payload);

      state = action.payload;
    },
  },
});

export const { logout, login } = UserSlice.actions;

export default UserSlice;
