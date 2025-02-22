import {StaffModel} from "../model/StaffModel.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState : StaffModel[]=[]

const api = axios.create({
    baseURL : "http://localhost:3002"
})

export const saveStaff = createAsyncThunk(
    "staff/saveStaff",
    async (staff: StaffModel) => {
        try {
            const response = await api.post("/Staff/add", staff);
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
export const updatedStaff = createAsyncThunk(
    "staff/updatedStaff",
    async (payload: { firstName: string; staff: StaffModel }) => {
        try {
            const response = await api.put(`/update/${payload.firstName}`, payload.staff);
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
        builder
            .addCase(updatedStaff.fulfilled, (state, action) => {
                const index = state.findIndex(
                    (staff) => staff.firstName === action.payload.firstName
                );
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(updatedStaff.rejected, (state, action) => {
                console.error("Failed to update staff!", action.payload);
            })
            .addCase(updatedStaff.pending, (state, action) => {
                console.error("Pending");
            });
    },

})

export default StaffSlice.reducer;