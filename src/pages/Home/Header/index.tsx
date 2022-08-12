import React from 'react';
import * as S from './styles';
import Pet from '../../../asset/pets.png';
import {Container,Row,Col} from 'react-bootstrap'
export default function Header(){
    return(
    //    <S.HeadLine>
    //         <S.DisplayRows> 
    //          
    //         </S.DisplayRows>
    //         <S.DisplayRows>
    //
    //         </S.DisplayRows>
    //    </S.HeadLine>
    <Container>
        <Row>
            <S.DisplayRows>
            <img src={Pet}/>
            </S.DisplayRows>
            <S.DisplayRows>
            <S.HeadLineText>Pet Society</S.HeadLineText>
            </S.DisplayRows>

        </Row>
        </Container>
    )
}