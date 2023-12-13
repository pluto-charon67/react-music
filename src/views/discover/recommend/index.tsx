import React, { memo, useEffect } from 'react';
import type { ReactNode, FC } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/app';
import {
    fetchBannersAction,
    fetchHotRecommendAction,
    fetchNewAblumAction,
    fetchRankingDataAction,
    fetchSingerDataAction,
} from './store';
import Banners from './components/banner';
import { Container } from './style';
import Hot from '@/views/discover/recommend/components/hot/index';
import NewAlbum from '@/views/discover/recommend/components/new-album/index';
import RankingList from '@/views/discover/recommend/components/rankingList';
import Login from './components/login';
import SettleSInger from './components/settle-singer';
import HotAnchor from './components/hot-anchor';

interface IProps {
    children?: ReactNode;
}

const Recommend: FC<IProps> = memo((props) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchBannersAction());
        dispatch(fetchHotRecommendAction());
        dispatch(fetchNewAblumAction());
        dispatch(fetchRankingDataAction());
        dispatch(fetchSingerDataAction());
    }, []);
    return (
        <Container>
            <Banners />
            <div className="content wrap-v2">
                <div className="left">
                    <Hot />
                    <NewAlbum />
                    <RankingList />
                </div>
                <div className="right">
                    <Login />
                    <SettleSInger />
                    <HotAnchor />
                </div>
            </div>
        </Container>
    );
});

export default Recommend;
