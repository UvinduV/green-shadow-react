import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ModelSlice from "../reducers/ModelSlice.ts";
import CropSlice from "../reducers/CropSlice.ts";
import FieldSlice from "../reducers/FieldSlice.ts";
import StaffSlice from "../reducers/StaffSlice.ts";

// export const store = configureStore({
//     reducer: {
//         modal: ModelSlice,
//     },
// });

const rootReducer = combineReducers({
    modal: ModelSlice,
    crop: CropSlice,
    field: FieldSlice,
    staff: StaffSlice,
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;