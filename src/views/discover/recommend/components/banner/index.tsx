import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

import { Container } from './style';
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
    return (
        <Container>
            <div>
                {banners.map((item) => (
                    <div key={item.imageUrl}>{item.imageUrl}</div>
                ))}
            </div>
        </Container>
    );
});

export default Banners;
