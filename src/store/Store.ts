import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "../reducers/ModelSlice.ts";

export const store = configureStore({
    reducer: {
        modal: ModalReducer,
    },
});