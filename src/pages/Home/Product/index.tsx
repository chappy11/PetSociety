import React from 'react';
import {Row,Container,Col} from 'react-bootstrap'
import {CardItem,SizeBox,} from '../../../components'
import Pet from '../../../asset/pets.png';
import * as S from './style';
import { CardGroup } from 'react-bootstrap';
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
    <Container>
         <Row xs={5} md={2} className="g-4 align-items-center">
            {item.map((val)=>(
                
                 <CardItem img={Pet} name={val.name} price={val.price}/>
                 
            ))}
     
                </Row>
   </Container>
   
      )
}