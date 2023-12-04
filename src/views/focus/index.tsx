import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
    children?: ReactNode;
}

const Focus: FC<IProps> = memo((props) => {
    return <div> Focus</div>;
});

export default Focus;
