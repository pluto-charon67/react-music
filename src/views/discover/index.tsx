import React, { memo, Suspense } from 'react';
import type { ReactNode, FC } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '@/views/discover/components/navBar';

interface IProps {
    children?: ReactNode;
}

const Discover: FC<IProps> = memo((props) => {
    return (
        <div className="discover">
            <NavBar />
            {/* 二级路由懒加载的占位符 */}
            <Suspense fallback="loading">
                <Outlet />
            </Suspense>
        </div>
    );
});

export default Discover;
