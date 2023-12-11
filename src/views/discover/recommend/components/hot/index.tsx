import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

import { Container } from './style';
import AreaHeader from '@/components/area-header';
import { useAppSelector, appShallowEqual } from '@/hooks/app';
import SongItem from '@/components/song-item';

interface IProps {
    children?: ReactNode;
}

const Hot: FC<IProps> = memo((props) => {
    const { hotRecommends } = useAppSelector(
        (state) => ({
            hotRecommends: state.recommend.hotRecommends,
        }),
        appShallowEqual,
    );
    return (
        <Container>
            <AreaHeader
                title="热门推荐"
                keywords={['华语', '流行', '摇滚', '民谣', '电子']}
                moreLink="/discover/songs"
            />
            <div className="recommend-list">
                {hotRecommends.map((item) => {
                    return (
                        <div className="item" key={item.id}>
                            <SongItem data={item}></SongItem>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
});

export default Hot;
