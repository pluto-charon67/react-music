import React, { memo, useRef } from 'react';
import type { ReactNode, FC, ElementRef } from 'react';
import { Carousel } from 'antd';

import Container from './style';
import AreaHeader from '@/components/area-header';
import { useAppSelector, appShallowEqual } from '@/hooks/app';
import NewAblumItem from '@/components/new-ablum-item';

interface IProps {
    children?: ReactNode;
}

const NewAlbum: FC<IProps> = memo((props) => {
    const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
    const changeBanner = (isLeft = true) => {
        if (isLeft) return bannerRef.current?.prev();
        bannerRef.current?.next();
    };

    const { newAblums } = useAppSelector(
        (state) => ({
            newAblums: state.recommend.newAblums,
        }),
        appShallowEqual,
    );
    return (
        <Container>
            <AreaHeader title="新碟上架" moreLink="/discover/album"></AreaHeader>
            <div className="content">
                <div className="arrow sprite_02 arrow-left" onClick={() => changeBanner()}></div>
                <div className="banner">
                    {newAblums?.length && (
                        <Carousel ref={bannerRef} speed={1000}>
                            {[0, 1].map((item) => {
                                return (
                                    <div key={item}>
                                        <div className="album-list">
                                            {newAblums.slice(item * 5, (item + 1) * 5).map((i) => {
                                                return <NewAblumItem key={i.id} data={i}></NewAblumItem>;
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </Carousel>
                    )}
                </div>
                <div className="arrow sprite_02 arrow-right" onClick={() => changeBanner(false)}></div>
            </div>
        </Container>
    );
});

export default NewAlbum;
