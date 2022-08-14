import React from "react"
import { Form } from "react-bootstrap"
import * as S from "./styles"
type Props = {
  type?: string
  label?: string
  placeholder?: string
  onChange?: (e:any) => void
  value?: string
  name: string
}

export default function TextInput(props: Props) {
  return (
    <>
      <Form.Label>{props.label}</Form.Label>
      <S.Input
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  )
}
