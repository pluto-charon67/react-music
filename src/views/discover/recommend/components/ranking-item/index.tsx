import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

import { Container } from './style';
import { getImgSize } from '@/utils/format';

interface IProps {
    children?: ReactNode;
    data: any;
}

const RankingItem: FC<IProps> = memo((props: IProps) => {
    const { data } = props;
    const { tracks = [] } = data;
    return (
        <Container>
            <div className="header">
                <div className="image">
                    <img src={getImgSize(data.coverImgUrl, 80)} alt="" />
                    <a href="" className="sprite_cover"></a>
                </div>
                <div className="info">
                    <div className="name">{data.name}</div>
                    <div>
                        <button className="sprite_02 btn play"></button>
                        <button className="sprite_02 btn favor"></button>
                    </div>
                </div>
            </div>
            <div className="list">
                {tracks.slice(0, 10).map((item: any, index: number) => {
                    return (
                        <div className="item" key={item.id}>
                            <div className="index">{index + 1}</div>
                            <div className="info">
                                <div className="name">{item.name}</div>
                                <div className="operator">
                                    <button className="btn sprite_02 play"></button>
                                    <button className="btn sprite_icon2 add"></button>
                                    <button className="btn sprite_02 favor"></button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="footer">
                <a href="/discover/ranking">查看全部 &gt;</a>
            </div>
        </Container>
    );
});

export default RankingItem;
