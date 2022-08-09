import styled from 'styled-components';

interface IBoxProps {
    height?:number;
    width?:number;
}

export const Box = styled.div<IBoxProps>`
    height:${props => props.height}px;
    width:${props => props.width}px;
`;