import {StaffModel} from "../model/StaffModel.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {FieldModel} from "../model/FieldModel.ts";
import {deletedField, getFieldNames} from "./FieldSlice.ts";

const initialState : StaffModel[]=[]

const api = axios.create({
    baseURL : "http://localhost:3002"
})

export const saveStaff = createAsyncThunk(
    "staff/saveStaff",
    async (staff: StaffModel) => {
        try {
            const responseFieldId = await api.get(`/Field/searchFieldId/${staff.fieldName}`);
            const fieldId= responseFieldId.data;

            staff.fieldName = fieldId;

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
            const responseFieldId = await api.get(`/Field/searchFieldId/${payload.staff.fieldName}`);
            const fieldId= responseFieldId.data;

            payload.staff.fieldName = fieldId;
            const response = await api.put(`/Staff/update/${payload.firstName}`, payload.staff);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);
export const deletedStaff = createAsyncThunk(
    "staff/deletedStaff",
    async (firstName: string) => {
        try {
            const response = await api.delete(`/Staff/delete/${firstName}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);
export const getStaffNames = createAsyncThunk(
    "staff/getStaffNames",
    async () => {
        try {
            const response = await api.get("/Staff/staffNames");
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
        builder
            .addCase(deletedStaff.fulfilled, (state, action) => {
                return state.filter(
                    (staff: StaffModel) => staff.firstName !== action.payload.firstName
                );
            })
            .addCase(deletedField.rejected, (state, action) => {
                console.error("Failed to delete Staff!", action.payload);
            })
            .addCase(deletedField.pending, (state, action) => {
                console.error("Pending");
            });
        builder
            .addCase(getStaffNames.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(getStaffNames.rejected, (state, action) => {
                console.error("Failed to load staff names", action.payload);
            })
            .addCase(getStaffNames.pending, (state, action) => {
                console.error("Pending");
            });
    },

})

export default StaffSlice.reducer;