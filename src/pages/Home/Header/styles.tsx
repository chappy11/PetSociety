import styled from 'styled-components';
import { color } from '../../../themes/Colors';
import {Col} from 'react-bootstrap'

export const HeadLine = styled.div`
  display: flex;
  background: ${color.white};
  flex-direction: row;
  height: 100vh;
  width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 150vh;
  }
`

export const DisplayRows = styled(Col)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeadLineText = styled.p`
  font-weight: bold;
  color: ${color.primary};
  font-size: 3em;
`