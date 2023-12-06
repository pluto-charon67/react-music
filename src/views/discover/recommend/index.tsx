import React, { memo, useEffect } from 'react';
import type { ReactNode, FC } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/app';
import { fetchBannersAction } from './store';
import Banners from './components/banner';

interface IProps {
    children?: ReactNode;
}

const Recommend: FC<IProps> = memo((props) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchBannersAction());
    }, []);
    return (
        <div>
            <Banners />
        </div>
    );
});

export default Recommend;
