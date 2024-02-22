import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
import { AuthInfo, UserSignInResponse, AuthState } from "@/config/env";


//UserSignInResponse is the Response and AuthInfo is what we post
export const registerUser = createAsyncThunk<UserSignInResponse, AuthInfo>("register", async (data, { rejectWithValue }) => {

    try {
        const config = { headers: { "Content-Type": "application/json" } };
        const apiUrl = `https://aerflyt.onrender.com/register`;

        const response = await axios.post(apiUrl, data, config);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data);
        } else {
            return rejectWithValue("An error occurred");
        }
    }
});




const authSlice = createSlice({
    name: "auth",

    initialState: {
        userInfo: null as UserSignInResponse | null,
        error: null as string | null,
    } as AuthState,

    reducers: {

        resetSuccess(state) {
            state.userInfo = null
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.userInfo = null;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action: PayloadAction<UserSignInResponse>) => {
                state.userInfo = action.payload;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.userInfo = null;
                state.error = action.payload as string;
            })
    },
});

export default authSlice.reducer;
export const { resetSuccess } = authSlice.actions