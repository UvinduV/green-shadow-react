import {CropModel} from "../model/CropModel.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState : CropModel[]=[]

const api = axios.create({
    baseURL : "http://localhost:3002/"
})

export const saveCrop = createAsyncThunk(
    'crop/saveCrop',
    async (crop: CropModel) => {
        try {
            const responseFieldId = await api.get(`/Field/searchFieldId/${crop.fieldName}`);
            const fieldId= responseFieldId.data;

            const formData = new FormData();

            formData.append("commonName", crop.commonName);
            formData.append("scientificName", crop.scientificName);
            if (crop.cropImage) {
                formData.append("cropImage1", crop.cropImage);
            }
            formData.append("category", crop.category);
            formData.append("season", crop.season);
            formData.append("fieldId", fieldId);

            const response = await api.post("Crop/add", formData, {
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
export const getAllCrops = createAsyncThunk(
    "field/getAllCrops", async () => {
        try {
            const response = await api.get("/Crop/view");
            return response.data;
        } catch (error) {
            console.log(error);
        }
    });


const CropSlice = createSlice({
    name:"crop",
    initialState:initialState,
    reducers:{
        addCrop:(state,action)=>{
            state.push(action.payload);
        },
        updateCrop: (state, action) => {
            return state.map(crop =>
                crop.commonName === action.payload.commonName
                    ? {
                        commonName: action.payload.commonName,
                        scientificName: action.payload.scientificName,
                        cropImage: action.payload.cropImage,
                        category: action.payload.category,
                        season: action.payload.season,
                        fieldName: action.payload.fieldName
                    }
                    : crop
            );
        },
        deleteCrop: (state, action) => {
            return state.filter(crop => crop.commonName !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveCrop.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveCrop.rejected, (state, action) => {
                console.error("Failed to save crop!:", action.payload);
            })
            .addCase(saveCrop.pending, (state, action) => {
                console.error("Pending");
            });
        builder
            .addCase(getAllCrops.fulfilled, (state, action) => {
                action.payload.map((crop: CropModel) => {
                    state.push(crop);
                });
            })
            .addCase(getAllCrops.rejected, (state, action) => {
                console.error("Failed to load crop data", action.payload);
            })
            .addCase(getAllCrops.pending, (state, action) => {
                console.error("Pending");
            });
    }
})

export const {addCrop,updateCrop,deleteCrop} = CropSlice.actions;
export default CropSlice.reducer;