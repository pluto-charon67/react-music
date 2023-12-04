import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
    children?: ReactNode;
}

const Singer: FC<IProps> = memo((props) => {
    return <div>Singer</div>;
});

export default Singer;
