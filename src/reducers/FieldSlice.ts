import {FieldModel} from "../model/FieldModel.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState : FieldModel[]=[]

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
    }
})

export const {addField,updateField} = FieldSlice.actions;
export default FieldSlice.reducer;