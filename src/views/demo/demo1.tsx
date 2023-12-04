import React, { PureComponent } from 'react';

interface IProps {
    name: string;
    age?: number;
}

interface IState {
    msg: string;
    count: number;
}

// PureComponent的泛型接收三个参数，第一个表示props的类型，第二个表示state的类型，第三个表示class返回值的类型
export class Demo1 extends PureComponent<IProps, IState> {
    // class默认会执行constructor，所以我们有时候可以不必要写constructor，将state直接写
    state = {
        msg: 'hello',
        count: 0,
    };
    // constructor(props: IProps) {
    //     super(props);
    //     this.state = {
    //         msg: 'hello',
    //         count: 0,
    //     };
    // }
    render(): React.ReactNode {
        return <div>Demo1</div>;
    }

    getSnapshotBeforeUpdate() {
        return null;
    }
}

export default Demo1;
