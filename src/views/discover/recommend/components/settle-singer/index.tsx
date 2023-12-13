import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

import { Container } from './style';
import AreaHeaderV2 from '@/components/area-header-v2';
import { useAppSelector, appShallowEqual } from '@/hooks/app';
import { getImgSize } from '@/utils/format';

interface IProps {
    children?: ReactNode;
}

const SettleSInger: FC<IProps> = memo((props) => {
    const { singer } = useAppSelector((state) => ({ singer: state.recommend.singer }), appShallowEqual);
    return (
        <Container>
            <AreaHeaderV2 title="入驻歌手" moreText="查看全部 &gt;" moreLink="/discover/artist" />
            <div className="artists">
                {singer.map((item) => {
                    return (
                        <a href="/discover/artist" key={item.id} className="item">
                            <img src={getImgSize(item.picUrl, 80)} alt="" />
                            <div className="info">
                                {' '}
                                <div className="name">{item.name}</div>
                                <div className="alias">{item.alias.join(' ')}</div>
                            </div>
                        </a>
                    );
                })}
            </div>
            <div className="apply-for">
                <a href="">申请成为网易音乐人</a>
            </div>
        </Container>
    );
});

export default SettleSInger;
