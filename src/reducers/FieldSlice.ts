import {FieldModel} from "../model/FieldModel.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState : FieldModel[]=[]

const api = axios.create({
    baseURL : "http://localhost:3002/"
})

export const saveField = createAsyncThunk(
    'field/saveField',
    async (field: FieldModel) => {
        try {
            const formData = new FormData();

            formData.append("fieldName", field.fieldName);
            formData.append("location", field.location);
            formData.append("extentSize", String(field.extentSize));

            if (field.fieldImage1 && field.fieldImage2) {
                formData.append("fieldImage1", field.fieldImage1);
                formData.append("fieldImage2", field.fieldImage2);
            }

            const response = await api.post("Field/add", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
);

const FieldSlice = createSlice({
    name:"field",
    initialState:initialState,
    reducers:{
        addField:(state,action)=>{
            state.push(action.payload);
        },
        updateField: (state, action) => {
            return state.map(field =>
                field.fieldName === action.payload.fieldName
                    ? {
                        fieldName: action.payload.fieldName,
                        location: action.payload.location,
                        extentSize: action.payload.extentSize,
                        fieldImage1: action.payload.fieldImage1,
                        fieldImage2: action.payload.fieldImage2
                    }
                    : field
            );
        },
        deleteField: (state, action) => {
            return state.filter(field => field.fieldName !== action.payload);
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(saveField.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveField.rejected, (state, action) => {
                console.error("Failed to save field!:", action.payload);
            })
            .addCase(saveField.pending, (state, action) => {
                console.error("Pending");
            });
    }
})

export const {addField,updateField,deleteField} = FieldSlice.actions;
export default FieldSlice.reducer;