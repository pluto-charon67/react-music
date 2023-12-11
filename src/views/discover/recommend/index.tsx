import React, { memo, useEffect } from 'react';
import type { ReactNode, FC } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/app';
import { fetchBannersAction, fetchHotRecommendAction, fetchNewAblumAction } from './store';
import Banners from './components/banner';
import { Container } from './style';
import Hot from '@/views/discover/recommend/components/hot/index';
import NewAlbum from '@/views/discover/recommend/components/new-album/index';

interface IProps {
    children?: ReactNode;
}

const Recommend: FC<IProps> = memo((props) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchBannersAction());
        dispatch(fetchHotRecommendAction());
        dispatch(fetchNewAblumAction());
    }, []);
    return (
        <Container>
            <Banners />
            <div className="content wrap-v2">
                <div className="left">
                    <Hot />
                    <NewAlbum />
                </div>
                <div className="right"></div>
            </div>
        </Container>
    );
});

export default Recommend;
