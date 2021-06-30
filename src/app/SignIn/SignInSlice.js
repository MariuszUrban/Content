import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const signupUser = createAsyncThunk(
  "users/signupUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        "https://mock-user-auth-server.herokuapp.com/api/v1/users",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      let data = await response.json();
      console.log("data", data);
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        return { ...data, email: email };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "sign-in/user",
  initialState: {
    username: "",
    email: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
    registered_users: [],
  },
  reducers: {
    registerUser: (state, { payload }) => {
      state.registered_users.push(payload);
      state.isFetching = true;
      return state;
    },
    setSuccess: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
});

export const { registerUser, setSuccess, clearState } = userSlice.actions;
export const userSelector = (state) => state.user;
export default userSlice.reducer;
