import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface IPage{
    pageNumber: number[];
}
const initialState:IPage = {
    pageNumber: []
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        addPageNumber: (state, action)=> {
            if (!state.pageNumber.includes(action.payload)) {
                state.pageNumber.push(action.payload);
                return state;
            }
        }
    }
    
})

export const { addPageNumber } = pageSlice.actions;
export default pageSlice.reducer;