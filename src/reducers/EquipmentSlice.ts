import {EquipmentModel} from "../model/EquipmentModel.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState : EquipmentModel[]=[]

const api = axios.create({
    baseURL : "http://localhost:3002"
})

export const saveEquipment = createAsyncThunk(
    "equipment/saveEquipment",
    async (equipment: EquipmentModel) => {
        try {
            const responseStaffId = await api.get(`/Staff/searchStaffId/${equipment.staffId}`);
            const staffId= responseStaffId.data;
            const responseFieldId = await api.get(`/Field/searchFieldId/${equipment.fieldId}`);
            const fieldId= responseFieldId.data;

            equipment.staffId=staffId;
            equipment.fieldId=fieldId;

            const response = await api.post("/Equipment/add", equipment);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

const EquipmentSlice = createSlice({
    name:"equipment",
    initialState:initialState,
    reducers:{},

    extraReducers: (builder) => {
        builder
            .addCase(saveEquipment.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveEquipment.rejected, (state, action) => {
                console.error("Failed to save equipment!", action.payload);
            })
            .addCase(saveEquipment.pending, (state, action) => {
                console.error("Pending");
            });
    }
})
export default EquipmentSlice.reducer;