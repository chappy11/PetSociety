import React from 'react';
import {Card} from 'react-bootstrap'
type Props = {
    img:string
    name:string,
    price:string
}

export default function CardItem(props:Props){
    const {name,price,img} = props;

    return(
        <Card  style={{ width: '15em',marginLeft:'10px',marginRight:'10px' }}>
            <Card.Img variant='top' src={img} alt={'item image'} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{price}</Card.Text>
            </Card.Body>
        </Card>
    )
}