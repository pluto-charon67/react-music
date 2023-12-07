import React, { memo, useRef, ElementRef, useState } from 'react';
import type { ReactNode, FC } from 'react';
import { Carousel } from 'antd';
import classNames from 'classnames';
// import type { CarouselRef } from 'antd';

import { BannerContainer, BannerLeft, BannerRight, BannerControl } from './style';
import { useAppSelector, appShallowEqual } from '@/hooks/app';

interface IProps {
    children?: ReactNode;
}

const Banners: FC<IProps> = memo((props) => {
    const { banners } = useAppSelector(
        (state) => ({
            banners: state.recommend.banners,
        }),
        appShallowEqual,
    );

    const swiper = useRef<ElementRef<typeof Carousel>>(null);
    const onChange = (isLeft = true) => {
        if (isLeft) return swiper.current?.prev();
        swiper.current?.next();
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const onAfterChange = (current: number) => {
        setCurrentIndex(current);
    };
    let bgImgUrl = '';
    if (banners?.length && currentIndex >= 0) bgImgUrl = `${banners[currentIndex]?.imageUrl}?imageView&blur=40x20`;

    return (
        <BannerContainer style={{ background: `url('${bgImgUrl}') center center / 6000px` }}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel effect="fade" dots={false} autoplay ref={swiper} afterChange={onAfterChange}>
                        {banners.map((item) => {
                            return (
                                <div className="banner-item" key={item.imageUrl}>
                                    <img src={item.imageUrl} alt={item.typeTitle} className="image" />
                                </div>
                            );
                        })}
                    </Carousel>
                    <ul className="dots">
                        {banners.map((item, index) => {
                            return (
                                <li key={item.imageUrl}>
                                    <span className={classNames('item', { active: index === currentIndex })}></span>
                                </li>
                            );
                        })}
                    </ul>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={() => onChange()}></button>
                    <button className="btn right" onClick={() => onChange(false)}></button>
                </BannerControl>
            </div>
        </BannerContainer>
    );
});

export default Banners;
