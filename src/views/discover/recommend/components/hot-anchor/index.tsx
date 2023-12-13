import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

import { Container } from './style';
import AreaHeaderV2 from '@/components/area-header-v2';
import { hotRadios } from '@/assets/data/local_data';

interface IProps {
    children?: ReactNode;
}

const SettleSInger: FC<IProps> = memo((props) => {
    return (
        <Container>
            <AreaHeaderV2 title="热门主播"></AreaHeaderV2>
            <div className="anchors">
                {hotRadios.map((item) => {
                    return (
                        <div className="item" key={item.picUrl}>
                            <a href="" className="image">
                                <img src={item.picUrl} alt="" />
                            </a>
                            <div className="info">
                                <div className="name">{item.name}</div>
                                <div className="position">{item.position}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
});

export default SettleSInger;
