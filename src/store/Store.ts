import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ModelSlice from "../reducers/ModelSlice.ts";
import CropSlice from "../reducers/CropSlice.ts";
import FieldSlice from "../reducers/FieldSlice.ts";
import StaffSlice from "../reducers/StaffSlice.ts";
import VehicleSlice from "../reducers/VehicleSlice.ts";
import EquipmentSlice from "../reducers/EquipmentSlice.ts";

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
    vehicle: VehicleSlice,
    equipment: EquipmentSlice,
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;