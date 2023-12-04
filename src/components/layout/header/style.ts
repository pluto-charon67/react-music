import styled from 'styled-components';

export default styled.div`
    .content {
        ${(props) => props.theme.mixin.warp}
    }
`;
