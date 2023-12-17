import { createSlice } from '@reduxjs/toolkit';

interface IPlayerState {
    currentPlayer: any;
}

const initialState: IPlayerState = {
    currentPlayer: {},
};

const palyerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {},
});

export default palyerSlice.reducer;
