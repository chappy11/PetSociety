import React from 'react';
import {Row,Col,Container} from 'react-bootstrap'
import {CardItem,SizeBox} from '../../../components'
import Pet from '../../../asset/pets.png';
import * as S from './style';
export default function Product(){
    const item = [{
        name:"gg",
        price:"100"
    },
    {
        name:"qw",
        price:"200"
    },
    {
        name:"gg",
        price:"100"
    },
    {
        name:"gg",
        price:"100"
    },
    {
        name:"qw",
        price:"200"
    },
    {
        name:"gg",
        price:"100"
    }
]

return(
    <Container >
      
        <Row >
      
            {item.map((val)=>(
                <S.Column >
                 <CardItem img={Pet} name={val.name} price={val.price}/>
                </S.Column>
            ))}
        </Row>
      
    </Container>
)
}