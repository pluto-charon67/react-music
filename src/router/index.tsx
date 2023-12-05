import React, { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Discover = lazy(() => import('@/views/discover'));
const Recommend = lazy(() => import('@/views/discover/recommend'));
const Ranking = lazy(() => import('@/views/discover/ranking'));
const Songs = lazy(() => import('@/views/discover/songs'));
const Djradio = lazy(() => import('@/views/discover/djradio'));
const Singer = lazy(() => import('@/views/discover/singer'));
const Album = lazy(() => import('@/views/discover/album'));

const Mine = lazy(() => import('@/views/mine'));
const Focus = lazy(() => import('@/views/focus'));
const Download = lazy(() => import('@/views/download'));

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to="/discover" />,
    },
    {
        path: '/discover',
        element: <Discover />,
        children: [
            {
                path: '/discover',
                element: <Navigate to="/discover/recommend" />,
            },
            {
                path: '/discover/recommend',
                element: <Recommend />,
            },
            {
                path: '/discover/ranking',
                element: <Ranking />,
            },
            {
                path: '/discover/songs',
                element: <Songs />,
            },
            {
                path: '/discover/djradio',
                element: <Djradio />,
            },
            {
                path: '/discover/artist',
                element: <Singer />,
            },
            {
                path: '/discover/album',
                element: <Album />,
            },
        ],
    },
    {
        path: '/mine',
        element: <Mine />,
    },
    {
        path: '/focus',
        element: <Focus />,
    },
    {
        path: '/download',
        element: <Download />,
    },
];

export default routes;
