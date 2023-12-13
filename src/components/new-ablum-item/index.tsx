import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Container } from './style';
import { getImgSize } from '@/utils/format';

interface IProps {
    children?: ReactNode;
    data: any;
}

const NewAblumItem: FC<IProps> = memo((props: IProps) => {
    const { data } = props;
    return (
        <Container>
            <div className="top">
                <img src={getImgSize(data.picUrl, 100)} alt="" />
                <a href="" className="sprite_cover cover"></a>
            </div>
            <div className="bottom">
                <div className="name">{data.name}</div>
                <div className="artist">{data.artist.name}</div>
            </div>
        </Container>
    );
});

export default NewAblumItem;
