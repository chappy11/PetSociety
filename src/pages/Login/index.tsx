import React from "react"
import { Button, Card, Container } from "react-bootstrap"
import { SizeBox, TextInput } from "../../components"
import * as S from "./style"
export default function Login() {
  return (
    <S.LoginContainer>
      <S.LoginCard>
        <Card.Header>Welcome to Pets Society</Card.Header>
        <Card.Body>
          <TextInput name="password" placeholder="Username" label="Username" />
          <SizeBox height={15} />
          <TextInput name="password" placeholder="Password" label="Password" />
          <SizeBox height={20} />
          <Button>Login</Button>
          <SizeBox height={20} />
          <p className="text-align-center">
            Don't have any account? <a href="/register">Register Now</a>
          </p>
        </Card.Body>
      </S.LoginCard>
    </S.LoginContainer>
  )
}
