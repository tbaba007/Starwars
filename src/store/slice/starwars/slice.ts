import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { IResult,Results as Starship } from '../../../component/starwars/StarshipList';

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
            state= action.payload;
            return state;
        },
        updateStarWars: (state, action: PayloadAction<IResult>) => {

        }
    }
})

export const { updateStarWars, addStarWars } =starwarsSlice.actions;
export default starwarsSlice.reducer;
