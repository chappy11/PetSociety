import React from "react"
import { Container, Col, Row, Button } from "react-bootstrap"
import { SizeBox, TextInput } from "../../components"
import Header from "./Header"
export default function RegisterShopOwner() {
  return (
    <>
      <Header />
      <SizeBox height={20} />
      <Container>
        <Row>
          <Col xs={4}>
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
            <SizeBox height={20} />
            <h3>Personal Info</h3>
            <Row>
              <Col>
                <TextInput
                  name="firstname"
                  placeholder="Firstname"
                  label="Firstname"
                />
              </Col>
              <Col>
                <TextInput
                  name="middlename"
                  placeholder="Middlename"
                  label="Middlename"
                />
              </Col>
              <Col>
                <TextInput
                  name="lastname"
                  placeholder="Lastname"
                  label="Lastname"
                />
              </Col>
            </Row>
            <SizeBox height={20} />
            <h3>Shop Information</h3>
            <SizeBox height={10} />
            <TextInput
              placeholder="Shop Name"
              label="Shop Name"
              name="shopName"
            />
            <SizeBox height={10} />
            <TextInput
              placeholder="Description"
              label="Shop Description"
              name="shopDescription"
            />
            <SizeBox height={10} />
            <TextInput
              placeholder="Shop Address"
              label="Shop Address"
              name="shopAddress"
            />
            <SizeBox height={20} />
            <Button>Submit</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
