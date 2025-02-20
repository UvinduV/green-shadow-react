import {CropModel} from "../model/CropModel.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState : CropModel[]=[]

const CropSlice = createSlice({
    name:"customer",
    initialState:initialState,
    reducers:{
        addCrop:(state,action)=>{
            state.push(action.payload);
        },
    }
})

export const {addCrop} = CropSlice.actions;
export default CropSlice.reducer;