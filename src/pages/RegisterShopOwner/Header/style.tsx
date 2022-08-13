import styled from "styled-components"
import { Navbar } from "react-bootstrap"
import { color } from "../../../themes/Colors"

export const Navigation = styled(Navbar)`
  background: ${color.primary};
`
export const Brand = styled(Navbar.Brand)`
  color: ${color.white};
`

export const NavText = styled.a`
  color: ${color.white};
`