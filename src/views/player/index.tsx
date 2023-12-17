import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

import { Container } from './style';

interface IProps {
    children?: ReactNode;
}

const Player: FC<IProps> = memo((props) => {
    return <Container>Player</Container>;
});

export default Player;
