import {StaffModel} from "../model/StaffModel.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState : StaffModel[]=[]

const api = axios.create({
    baseURL : "http://localhost:3002/"
})

export const saveStaff = createAsyncThunk(
    "staff/saveStaff",
    async (staff: StaffModel) => {
        try {
            const response = await api.post("Field/add", staff);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);
export const getAllStaff = createAsyncThunk(
    "staff/getAllStaff", async () => {
        try {
            const response = await api.get("/Staff/view");
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);
const StaffSlice = createSlice({
    name:"staff",
    initialState:initialState,
    reducers:{},

    extraReducers: (builder) => {
        builder
            .addCase(saveStaff.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveStaff.rejected, (state, action) => {
                console.error("Failed to save staff!", action.payload);
            })
            .addCase(saveStaff.pending, (state, action) => {
                console.error("Pending");
            });
        builder
            .addCase(getAllStaff.fulfilled, (state, action) => {
                action.payload.map((staff: StaffModel) => {
                    state.push(staff);
                });
            })
            .addCase(getAllStaff.rejected, (state, action) => {
                console.error("Failed to load Staff data", action.payload);
            })
            .addCase(getAllStaff.pending, (state, action) => {
                console.error("Pending");
            });
    },

})

export default StaffSlice.reducer;