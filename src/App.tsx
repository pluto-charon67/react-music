import React, { memo, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Header from '@/components/layout/header';

import routes from '@/router';

const App = memo(() => {
    return (
        <div className="app">
            <Header />
            <Suspense fallback="loading">
                <div className="main">{useRoutes(routes)}</div>
            </Suspense>
        </div>
    );
});

export default App;
