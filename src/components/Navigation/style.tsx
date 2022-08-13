import styled from 'styled-components';
import {color} from '../../themes/Colors';

export const Container = styled.div`
  background-color: ${color.primary};
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 2;
`

export const Brand = styled.h5`
  color: ${color.white};
  font-weight: bold;
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 60px;
`

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 15px;
`

export const NavigationList = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0px 20px;
`

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 20px;
`

export const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: ${color.white};
  margin: 0px 7px;
  cursor: pointer;

  &:hover {
    font-size: 20px;
    color: ${color.white};
  }
`

export const Text = styled.p`
    color:white;
`;