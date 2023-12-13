import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

import { Container } from './style';
import AreaHeader from '@/components/area-header';
import { useAppSelector, appShallowEqual } from '@/hooks/app';
import RankingItem from '@/views/discover/recommend/components/ranking-item';

interface IProps {
    children?: ReactNode;
}

const RankingList: FC<IProps> = memo((props) => {
    const { ranking } = useAppSelector(
        (state) => ({
            ranking: state.recommend.ranking,
        }),
        appShallowEqual,
    );
    return (
        <Container>
            <AreaHeader title="榜单" moreLink="/discover/ranking"></AreaHeader>
            <div className="content">
                {ranking.map((item) => {
                    return <RankingItem key={item.id} data={item}></RankingItem>;
                })}
            </div>
        </Container>
    );
});

export default RankingList;
