import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
}

const initialState: User = { id: "0", name: "Guest" };

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // createUser: (state, action: PayloadAction<User>) => {
    //   state.push(action.payload);
    // },

    // deleteUser: (state, action: PayloadAction<User>) => {
    //   const userToDelete = action.payload;
    //   state = state.filter((user: User) => user.id !== userToDelete.id);
    // },
    resetUser: () => initialState,
  },
});

export const { resetUser } = usersSlice.actions;

export default usersSlice.reducer;
