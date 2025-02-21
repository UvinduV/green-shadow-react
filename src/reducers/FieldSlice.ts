import {FieldModel} from "../model/FieldModel.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState : FieldModel[]=[]

const FieldSlice = createSlice({
    name:"field",
    initialState:initialState,
    reducers:{
        addField:(state,action)=>{
            state.push(action.payload);
        }
    }
})

export const {addField} = FieldSlice.actions;
export default FieldSlice.reducer;