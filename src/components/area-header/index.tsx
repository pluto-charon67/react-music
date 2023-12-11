import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';

interface IProps {
    children?: ReactNode;
    title: string;
    keywords?: string[];
    moreText?: string;
    moreLink?: string;
}

const AreaHeader: FC<IProps> = memo((props: IProps) => {
    const { title = '默认标题', keywords = [], moreText = '更多', moreLink = '/' } = props;
    return (
        <Container className="sprite_02">
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keywords">
                    {keywords.map((item) => {
                        return (
                            <div className="item" key={item}>
                                <span className="link">{item}</span>
                                <span className="divider">|</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="right">
                <Link to={moreLink} className="more">
                    {moreText}
                </Link>
                <i className="sprite_02 icon"></i>
            </div>
        </Container>
    );
});

export default AreaHeader;
