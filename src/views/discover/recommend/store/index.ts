import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners } from '../service';

interface IRecommendstate {
    banners: any[];
}
const initialState: IRecommendstate = {
    banners: [],
};

export const fetchBannersAction = createAsyncThunk('banners', async (arg, { getState, dispatch }) => {
    const res = await getBanners();
    // 这是利用createAsyncThunk第二个参数有dispatch的方式直接在接口请求成功后去dispatch修改state;
    // 当然使用distpatch直接去拿到异步结果，对于错误原因我们可以用try catch去捕获
    dispatch(changeBannersAction(res.banners));
    // console.log(res);
    // 使用官方的对于异步store的监听extraReducers；就必须要有以下的return返回结果
    return res.data;
});

const recommendSlice = createSlice({
    name: 'recommend',
    initialState,
    reducers: {
        changeBannersAction(state, { payload }) {
            state.banners = payload;
        },
    },
    // 监听createAsyncThunk的异步请求的结果，这是redux官方推荐的
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchBannersAction.fulfilled, (state, action) => {
    //             state.banners = action.payload;
    //         })
    //         .addCase(fetchBannersAction.rejected, () => {
    //             console.log('请求拒绝');
    //         });
    // },
});
export const { changeBannersAction } = recommendSlice.actions;
export default recommendSlice.reducer;
