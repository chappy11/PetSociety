import React from "react"
import * as S from "./style"
import { Navbar, Container } from "react-bootstrap"
import { SizeBox } from "../../../components"

export default function Header() {
  return (
    <S.Navigation variant={"dark"}>
      <Container>
        <S.Brand>Pet Society</S.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Register as : <a href="/register">Customer</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </S.Navigation>
  )
}
