import React from 'react';
import {Container,Form,Row,Col} from 'react-bootstrap';
export default function Register(){
   return(
    <Container>
        <Row>
        <Col>
                <Col xs={2}>
                <input type='file'/>
                </Col>
            </Col>
            
          
            <Col> 
                            <Form.Control placeholder='Firstname'/>
                        </Col>
                        <Col>
                            <Form.Control placeholder='Middlename'/>
                        </Col>
                        <Col>
                            <Form.Control placeholder='Lastname'/>
                        </Col>
           
                    
        </Row>
           
    </Container>
   ) 
}