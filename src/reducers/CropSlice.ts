import {CropModel} from "../model/CropModel.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState : CropModel[]=[]

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
            return state.filter(crop => crop.commonName !== action.payload.commonName);
        }
    }
})

export const {addCrop,updateCrop,deleteCrop} = CropSlice.actions;
export default CropSlice.reducer;