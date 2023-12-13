import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

import { Container } from './style';

interface IProps {
    children?: ReactNode;
}

const Login: FC<IProps> = memo((props) => {
    return (
        <Container className="sprite_02">
            <p className="desc">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <a href="#/login" className="sprite_02">
                用户登录
            </a>
        </Container>
    );
});

export default Login;
