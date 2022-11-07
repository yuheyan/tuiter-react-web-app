import { createSlice } from "@reduxjs/toolkit";
import tuitsArray from './tuits.json';

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuitsArray,
    reducers: {
        likeToggle(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id)
            if (tuit.liked === true) {
                tuit.liked = false;
                tuit.likes--;
            } else {
                tuit.liked = true;
                tuit.likes++;
            }
        }
    }
});

export default tuitsSlice.reducer;
export const {likeToggle} = tuitsSlice.actions