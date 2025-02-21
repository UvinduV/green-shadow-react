import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ModelSlice from "../reducers/ModelSlice.ts";
import CropSlice from "../reducers/CropSlice.ts";
import FieldSlice from "../reducers/FieldSlice.ts";

// export const store = configureStore({
//     reducer: {
//         modal: ModalReducer,
//     },
// });

const rootReducer = combineReducers({
    modal: ModelSlice,
    crop: CropSlice,
    field: FieldSlice,
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;