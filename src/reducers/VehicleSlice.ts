import {VehicleModel} from "../model/VehicleModel.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState : VehicleModel[]=[]

const api = axios.create({
    baseURL : "http://localhost:3002"
})

export const saveVehicle = createAsyncThunk(
    "vehicle/saveVehicle",
    async (vehicle: VehicleModel) => {
        try {
            const responseStaffId = await api.get(`/Staff/searchStaffId/${vehicle.staffName}`);
            const staffId= responseStaffId.data;

            vehicle.staffName = staffId;

            const response = await api.post("/Vehicle/add", vehicle);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

const VehicleSlice = createSlice({
    name:"vehicle",
    initialState:initialState,
    reducers:{},

    extraReducers: (builder) => {
        builder
            .addCase(saveVehicle.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveVehicle.rejected, (state, action) => {
                console.error("Failed to save vehicle!", action.payload);
            })
            .addCase(saveVehicle.pending, (state, action) => {
                console.error("Pending");
            });
    }

});
export default VehicleSlice.reducer;