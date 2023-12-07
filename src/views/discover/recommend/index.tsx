import React, { memo, useEffect } from 'react';
import type { ReactNode, FC } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/app';
import { fetchBannersAction } from './store';
import Banners from './components/banner';
import { Container } from './style';

interface IProps {
    children?: ReactNode;
}

const Recommend: FC<IProps> = memo((props) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchBannersAction());
    }, []);
    return (
        <Container>
            <Banners />
            <div className="content wrap-v2">
                <div className="left"></div>
                <div className="right"></div>
            </div>
        </Container>
    );
});

export default Recommend;
