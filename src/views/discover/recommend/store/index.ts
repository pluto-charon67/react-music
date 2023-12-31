import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners, getHotRecommend, getNewAlbums, getTopList, getSonger } from '../service';

interface IRecommendstate {
    banners: any[];
    hotRecommends: any[];
    newAblums: any[];
    ranking: any[];
    singer: any[];
}
const initialState: IRecommendstate = {
    banners: [],
    hotRecommends: [],
    newAblums: [],
    ranking: [],
    singer: [],
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

export const fetchHotRecommendAction = createAsyncThunk('hotRecommend', async (arg, { getState, dispatch }) => {
    const res = await getHotRecommend();
    dispatch(changeHotRecommendAction(res.result));
});

export const fetchNewAblumAction = createAsyncThunk('newAlbum', async (arg, { getState, dispatch }) => {
    const res = await getNewAlbums();
    dispatch(changeNewAlbumAction(res.albums));
});

const ranking1ds = [19723756, 3779629, 2884035];
export const fetchRankingDataAction = createAsyncThunk('rankingData', async (arg, { getState, dispatch }) => {
    const promises: Promise<any>[] = [];
    for (const id of ranking1ds) {
        promises.push(getTopList(id));
    }
    Promise.all(promises).then((res) => {
        const playlists = res.map((item) => item.playlist);
        dispatch(changeRankingDataAction(playlists));
    });
});

export const fetchSingerDataAction = createAsyncThunk('singerData', async (arg, { getState, dispatch }) =>
    getSonger().then((res) => {
        dispatch(changeSingerDataAction(res.artists));
    }),
);

const recommendSlice = createSlice({
    name: 'recommend',
    initialState,
    reducers: {
        changeBannersAction(state, { payload }) {
            state.banners = payload;
        },
        changeHotRecommendAction(state, { payload }) {
            state.hotRecommends = payload;
        },
        changeNewAlbumAction(state, { payload }) {
            state.newAblums = payload;
        },
        changeRankingDataAction(state, { payload }) {
            state.ranking = payload;
        },
        changeSingerDataAction(state, { payload }) {
            state.singer = payload;
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
export const {
    changeBannersAction,
    changeHotRecommendAction,
    changeNewAlbumAction,
    changeRankingDataAction,
    changeSingerDataAction,
} = recommendSlice.actions;
export default recommendSlice.reducer;
