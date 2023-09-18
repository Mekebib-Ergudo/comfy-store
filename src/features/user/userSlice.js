import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//  Getting User from localsorage after they  logged in
const getUserFromLocalSorage = () => {
	return JSON.parse(localStorage.getItem("user")) || null;
};

const initialState = {
	user: getUserFromLocalSorage(),
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginUser: (state, action) => {
			const user = { ...action.payload.user, token: action.payload.jwt };
			state.user = user;
			localStorage.setItem("user", JSON.stringify(user));
		},
		logoutUser: (state) => {
			state.user = null;
			localStorage.removeItem("user"); // remove token from local storage to log out the current logged in user
			toast.success("Logged Out Successfully");
		},
	},
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
