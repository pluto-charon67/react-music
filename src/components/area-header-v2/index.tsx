import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';

interface IProps {
    children?: ReactNode;
    title?: string;
    moreText?: string;
    moreLink?: string;
}

const AreaHeader: FC<IProps> = memo((props: IProps) => {
    const { title = '默认标题', moreText, moreLink } = props;
    return (
        <Container>
            <h3 className="title">{title}</h3>
            {moreText && moreLink && <a href={moreLink}>{moreText}</a>}
        </Container>
    );
});

export default AreaHeader;
