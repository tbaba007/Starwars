import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { IResult,Results as Starship } from '../../../component/starwars/StarshipList';
import {itemPerPage} from '../../../constants/config'
const initialState: IResult={
    count: 0,
    next: "",
    previous: null,
    results:[
        {
            mass:'',
            birth_year: '',
            created: '',
            edited: '',
            eye_color: '',
            films: [],
            name: '',
            gender: '',
            hair_color: '',
            height: '',
            homeworld: '',
            skin_color:''
        }
    ]

}

const starwarsSlice=createSlice({
    name: 'starwars',
    initialState,
    reducers: {
        addStarWars: (state, action: PayloadAction<IResult>) => {
            state.results.push(...action.payload.results);
            state.count = action.payload.count;
            return state;
        },
        updateStarWars: (state, action: PayloadAction<IResult>) => {

        },
        getPaginatedItems:(state,action) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            state.results.splice(action.payload * itemPerPage,
                action.payload * itemPerPage);
            return state;
        }
    }
})

export const { updateStarWars, addStarWars,getPaginatedItems } =starwarsSlice.actions;
export default starwarsSlice.reducer;
