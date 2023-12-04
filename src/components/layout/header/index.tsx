import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { useRoutes, Link } from 'react-router-dom';
import Container from './style';

interface IProps {
    children?: ReactNode;
}

const Header: FC<IProps> = memo((props) => {
    return (
        <Container>
            <div className="content">
                <Link to="/discover">发现音乐</Link>
                <Link to="/mine">我的音乐</Link>
                <Link to="/focus">关注</Link>
                <Link to="/download">下载客户端</Link>
            </div>
        </Container>
    );
});

export default Header;
