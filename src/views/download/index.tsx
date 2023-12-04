import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
    children?: ReactNode;
}

const Download: FC<IProps> = memo((props) => {
    return <div>Download</div>;
});

export default Download;
