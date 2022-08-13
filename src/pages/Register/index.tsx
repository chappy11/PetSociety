import React, { useState } from "react"
import { Container, Form, Row, Col, Button, Stack } from "react-bootstrap"
import { SizeBox, TextInput } from "../../components"
import swal from "sweetalert"
import Header from "./Header"
import * as S from "./style"
export default function Register() {
  const [params, setParams] = useState({
    profile_pic: "",
    username: "",
    password: "",
    firstname: "",
    middlename: "",
    lastname: "",
    gender: "",
    contact: "",
    birthdate: "",
    address: "",
  })

  const handleClick = () => {
    swal("Successfully", "You Have successfully Login", "success")
  }

  return (
    <>
      <Header />
      <SizeBox height={20} />
      <Container>
        <Row>
          <Col xs={3}>
            <input type="file" />
          </Col>
          <Col>
            <h3>Account Info</h3>
            <Col>
              <TextInput
                type="text"
                name="email"
                label="Email"
                placeholder="Email"
              />
              <SizeBox height={10} />
            </Col>
            <Col>
              <TextInput
                placeholder="Username"
                label="Username"
                name="username"
              />
            </Col>
            <SizeBox height={10} />
            <Col>
              <TextInput
                placeholder="Password"
                type="Password"
                label="Password"
                name="password"
              />
            </Col>
            <SizeBox height={10} />
            <Col>
              <TextInput
                placeholder="Confirm Password"
                type="Password"
                label="Confirm Password"
                name="password"
              />
            </Col>
            <SizeBox height={20} />
            <h3>Personal Data</h3>
            <Row>
              <Col>
                <TextInput
                  placeholder="Firstname"
                  label="Firstname"
                  name="firstname"
                />
              </Col>
              <Col>
                <TextInput
                  placeholder="Middlename"
                  label="Middlename"
                  name="middlename"
                />
              </Col>
              <Col>
                <TextInput
                  placeholder="Lastname"
                  label="Lastname"
                  name="lastname"
                />
              </Col>
            </Row>
            <SizeBox height={20} />
            <Row>
              <Form.Label>Gender</Form.Label>
              <Stack direction="horizontal">
                <Form.Check
                  type="radio"
                  name="gender"
                  value="Male"
                  label="Male"
                />
                <SizeBox width={20} />
                <Form.Check
                  type="radio"
                  name="gender"
                  value="Female"
                  label="Female"
                />
              </Stack>
            </Row>
            <SizeBox height={20} />
            <Row>
              <Col>
                <TextInput
                  type="text"
                  label="Contact Number"
                  placeholder="09XXXXXXX"
                  name="contact"
                />
              </Col>
              <Col>
                <TextInput type="date" label="Birthdate" name="birthdate" />
              </Col>
            </Row>
            <SizeBox height={20} />
            <TextInput label="Address" placeholder="Address" name="address" />
            <SizeBox height={20} />
            <Button onClick={handleClick}>Submit</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
