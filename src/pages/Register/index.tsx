import React from 'react';
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import { SizeBox, TextInput } from "../../components"
import Header from "./Header"
import * as S from "./style"
export default function Register() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={3}>
            <input type="file" />
          </Col>
          <Col>
            <h3>Account Info</h3>
            <Row>
              <Col>
                <TextInput placeholder="Username" label="Username" />
              </Col>
              <Col>
                <TextInput
                  placeholder="Password"
                  type="Password"
                  label="Password"
                />
              </Col>
            </Row>
            <SizeBox height={20} />
            <h3>Personal Data</h3>
            <Row>
              <Col>
                <TextInput placeholder="Firstname" label="Firstname" />
              </Col>
              <Col>
                <TextInput placeholder="Middlename" label="Middlename" />
              </Col>
              <Col>
                <TextInput placeholder="Lastname" label="Lastname" />
              </Col>
            </Row>
            <SizeBox height={20} />
            <Row>
              <Col>
                <TextInput
                  type="text"
                  label="Contact Number"
                  placeholder="09XXXXXXX"
                />
              </Col>
              <Col>
                <TextInput type="date" label="Birthdate" />
              </Col>
            </Row>
            <SizeBox height={20} />
            <TextInput label="Address" placeholder="Address" />
            <SizeBox height={20} />
            <Button>Submit</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}