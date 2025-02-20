import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ModelSlice from "../reducers/ModelSlice.ts";
import CropSlice from "../reducers/CropSlice.ts";

// export const store = configureStore({
//     reducer: {
//         modal: ModalReducer,
//     },
// });

const rootReducer = combineReducers({
    modal: ModelSlice,
    crop: CropSlice
})

export const store = configureStore({
    reducer: rootReducer
})