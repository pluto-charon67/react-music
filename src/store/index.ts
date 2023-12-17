import { configureStore } from '@reduxjs/toolkit';

import counter from '@/store/modules/count';
import recommendReducer from '@/views/discover/recommend/store';
import PlayerReducer from '@/views/player/store/player';

const store = configureStore({
    reducer: {
        counter,
        recommend: recommendReducer,
        palyer: PlayerReducer,
    },
});

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
// store的getState方法本身是用于获取store的state，其是一个函数，函数返回state
// typeof 可以获取函数的定义，而ReturnType可以获取函数的返回值；这样我们就直接获取到了state的类型，不需要自己去定义了
// 假如在每个使用useSelector的地方都导入获取的state类型，并定义类型会很麻烦；更好的方式是创建 useDispatch 和 useSelector 钩子的类型定义
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
