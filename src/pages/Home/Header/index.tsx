import React from 'react';
import * as S from './styles';
import Pet from '../../../asset/pets.png';
export default function Header(){
    return (
      <S.HeadLine>
            <S.DisplayRows>
                <img src={Pet} />
            </S.DisplayRows>
            <S.DisplayRows>
                <S.HeadLineText>
                    Pet Society
                </S.HeadLineText>
            </S.DisplayRows>
      </S.HeadLine>
    )
}