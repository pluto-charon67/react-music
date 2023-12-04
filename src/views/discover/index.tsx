import React, { memo, Suspense } from 'react';
import type { ReactNode, FC } from 'react';
import { Outlet, Link } from 'react-router-dom';

interface IProps {
    children?: ReactNode;
}

const Discover: FC<IProps> = memo((props) => {
    return (
        <div className="discover">
            <div className="nav">
                <Link to="/discover/recommend">推荐</Link>
                <Link to="/discover/ranking">排行榜</Link>
                <Link to="/discover/songs">歌单</Link>
                <Link to="/discover/djradio">主播电台</Link>
                <Link to="/discover/singer">歌手</Link>
                <Link to="/discover/album">新碟上架</Link>
            </div>
            {/* 二级路由懒加载的占位符 */}
            <Suspense fallback="loading">
                <Outlet />
            </Suspense>
        </div>
    );
});

export default Discover;
