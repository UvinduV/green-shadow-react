import {VehicleModel} from "../model/VehicleModel.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {updatedStaff} from "./StaffSlice.ts";

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
export const getAllVehicle = createAsyncThunk(
    "vehicle/getAllVehicle", async () => {
        try {
            const response = await api.get("/Vehicle/view");
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);
export const updatedVehicle = createAsyncThunk(
    "vehicle/updatedVehicle",
    async (payload: { licensePlateNumber: string; vehicle: VehicleModel }) => {
        try {
            const responseStaffId = await api.get(`/Staff/searchStaffId/${payload.vehicle.staffName}`);
            const staffId= responseStaffId.data;

            payload.vehicle.staffName = staffId;
            const response = await api.put(`/Vehicle/update/${payload.licensePlateNumber}`, payload.vehicle);
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
        builder
            .addCase(getAllVehicle.fulfilled, (state, action) => {
                action.payload.map((vehicle: VehicleModel) => {
                    state.push(vehicle);
                });
            })
            .addCase(getAllVehicle.rejected, (state, action) => {
                console.error("Failed to load vehicle data", action.payload);
            })
            .addCase(getAllVehicle.pending, (state, action) => {
                console.error("Pending");
            });
        builder
            .addCase(updatedVehicle.fulfilled, (state, action) => {
                const index = state.findIndex(
                    (vehicle) => vehicle.licensePlateNumber === action.payload.licensePlateNumber
                );
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(updatedVehicle.rejected, (state, action) => {
                console.error("Failed to update vehicle!", action.payload);
            })
            .addCase(updatedVehicle.pending, (state, action) => {
                console.error("Pending");
            });
    }

});
export default VehicleSlice.reducer;