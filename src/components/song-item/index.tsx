import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

import Container from './style';
import { formatCount, getImgSize } from '@/utils/format';

interface IProps {
    children?: ReactNode;
    data: any;
}

const SongItem: FC<IProps> = memo((props: IProps) => {
    const { data } = props;
    return (
        <Container>
            <div className="top">
                <img src={getImgSize(data.picUrl, 140)} alt="" />
                <div className="cover sprite_cover">
                    <div className="info sprite_cover">
                        <span>
                            <i className="sprite_icon"></i>
                            <div className="count">{formatCount(data.playCount)}</div>
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="bottom">{data.name}</div>
        </Container>
    );
});

export default SongItem;
