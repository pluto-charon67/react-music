import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { NavLink } from 'react-router-dom';

import Container from './style';
import { discoverMenu } from '@/assets/data/local_data';

interface IProps {
    children?: ReactNode;
}

const Home: FC<IProps> = memo((props) => {
    return (
        <Container className="warp-v1">
            <div className="nav">
                {discoverMenu.map((item) => {
                    return (
                        <div className="item" key={item.link}>
                            <NavLink to={item.link}>{item.title}</NavLink>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
});

export default Home;
