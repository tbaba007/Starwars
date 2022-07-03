import { configureStore } from "@reduxjs/toolkit";
import slices from './slice'
export const store=configureStore({
    reducer: {
        starwars: slices.starwarsSlice,
        pageNumbers:slices.pageSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;