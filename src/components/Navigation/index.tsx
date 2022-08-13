import React from 'react';
import SizeBox from '../SizeBox';

import {NavigationLists} from '../../constants/NavigationList'

import * as S from './style';

export default function Navigation(){
   
    return (
      <S.Container>
        <S.Wrapper>
          <S.BrandContainer>
            <S.Brand>Pet Society</S.Brand>
          </S.BrandContainer>
          <S.NavigationList>
            {NavigationLists.map((value, index) => (
              <S.Link key={index.toString()}>{value.name}</S.Link>
            ))}
          </S.NavigationList>
          <S.AccountContainer>
            <S.Link href="/register">Register</S.Link>
            <SizeBox width={5} />
            <S.Text>/</S.Text>
            <SizeBox width={5} />
            <S.Link href="/login">Login</S.Link>
          </S.AccountContainer>
        </S.Wrapper>
      </S.Container>
    )
}
