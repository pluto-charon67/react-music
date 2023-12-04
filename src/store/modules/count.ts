import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 10,
    },
    reducers: {
        changeCount(state, { payload }: PayloadAction<number>) {
            state.count = payload;
        },
    },
});

export const { changeCount } = counterSlice.actions;
export default counterSlice.reducer;
