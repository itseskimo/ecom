import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';


  
//UserInfo is the Response and AuthInfo is what we post
export const register = createAsyncThunk<UserResponse,AuthInfo>("register", async (data, { rejectWithValue }) => {

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




const AuthSlice = createSlice({
    name: "auth",

    initialState: {
        userInfo: null as UserResponse | null,
        error: null as string | null,
    } as AuthState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.userInfo = null;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action: PayloadAction<UserResponse>) => {
                state.userInfo = action.payload;
                state.error = null;
            })
            .addCase(register.rejected, (state, action) => {
                state.userInfo = null;
                state.error = action.payload as string;
            })
    },
});

export default AuthSlice.reducer;
