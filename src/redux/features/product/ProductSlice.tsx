// import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import axios from 'axios';




// export const getAllProducts = createAsyncThunk<DoctorsInfo[]>("getAllDoctors", async (_, { rejectWithValue }) => {

//     try {
//         const config = { headers: { "Content-Type": "application/json" } };
//         const apiUrl = `https://aerflyt.onrender.com/get-doctors-info`;

//         const response = await axios.get(apiUrl, config);
//         return response.data;
//     } catch (error) {
//         if (axios.isAxiosError(error) && error.response) {
//             return rejectWithValue(error.response.data);
//         } else {
//             return rejectWithValue("An error occurred");
//         }
//     }
// });


// const doctorSlice = createSlice({
//     name: "doctors",

//     initialState: {
//         productItems: []
//     },

//     reducers: {



//     },

//     extraReducers: (builder) => {
//         builder
//             .addCase(getAllProducts.pending, (state) => {
//                 state.productItems = null;
//             })
//             .addCase(getAllProducts.fulfilled, (state, action) => {
//                 state.productItems = action.payload;
//             })
//             .addCase(productItems.rejected, (state, action) => {
//                 state.productItems = null;
//             })
//     },
// });

// export default doctorSlice.reducer;
// export const { setRole } = doctorSlice.actions;