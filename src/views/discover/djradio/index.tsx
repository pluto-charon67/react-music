import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface IProps {
    children?: ReactNode;
}

const Djradio: FC<IProps> = memo((props) => {
    return <div>Djradio</div>;
});

export default Djradio;
