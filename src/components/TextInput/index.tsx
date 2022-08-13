import React from "react"
import { Form } from "react-bootstrap"
import * as S from "./styles"
type Props = {
  type?: string
  label?: string
  placeholder?: string
  onChange?: () => void
  value?: string
}

export default function TextInput(props: Props) {
  return (
    <>
      <Form.Label>{props.label}</Form.Label>
      <S.Input
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  )
}
