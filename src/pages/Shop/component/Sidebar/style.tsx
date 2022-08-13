import styled from "styled-components"
import { color } from "../../../../themes/Colors"

export const Container = styled.div`
  background: ${color.primary};
  height: 100vh;
  width: 15vw;
  flex-direction: column;
  display: flex;
`

export const Link = styled.a`
  color: ${color.white};
  cursor: pointer;
  text-decoration: none;
  padding: 5px 20px;
  font-weight: bold;

  &:hover {
    font-size: 18px;
    color: white;
  }
`
