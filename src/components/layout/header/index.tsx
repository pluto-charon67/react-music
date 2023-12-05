import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { useRoutes, NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import titleArr from '@/assets/data/header_titles.json';
import Container, { HeaderLeft, HeaderRight } from './style';

interface IProps {
    children?: ReactNode;
}

const Header: FC<IProps> = memo((props) => {
    const showItem = (item: any) => {
        const { title, type, link } = item;
        if (type === 'path')
            return (
                <NavLink to={item.link} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                    {item.title}
                    <i className="icon sprite_01"></i>
                </NavLink>
            );
        if (type === 'link') return <a href={item.link}>{item.title}</a>;
    };
    return (
        <Container>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="/#" className="logo sprite_01">
                        网易云
                    </a>
                    <div className="title-list">
                        {titleArr.map((item) => {
                            return (
                                <div className="item" key={item.title}>
                                    {showItem(item)}
                                </div>
                            );
                        })}
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input
                        className="search"
                        size="large"
                        placeholder="音乐/视频/电台/用户"
                        prefix={<SearchOutlined />}
                    />
                    <span className="center">创作者中心</span>
                    <span className="log">登录</span>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </Container>
    );
});

export default Header;
