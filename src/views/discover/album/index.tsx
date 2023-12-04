import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
    children?: ReactNode;
}

const Album: FC<IProps> = memo((props) => {
    return <div>Album</div>;
});

export default Album;
