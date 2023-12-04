import React, { memo, useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import http from '@/utils/http';

interface IProps {
    children?: ReactNode;
}

const Recommend: FC<IProps> = memo((props) => {
    useEffect(() => {
        http.get('/banner').then((res) => console.log(res));
    }, []);
    return <div>Recommend</div>;
});

export default Recommend;
