import React, { useMemo } from "react"

import * as S from "./style"

const NAVIGATIONS = [
  {
    name: "Dashboard",
    link: "/shop",
  },
  {
    name: "Manage Products",
    link: "/products",
  },
  {
    name: "Pending Orders",
    link: "",
  },
  {},
]

export default function Sidebar() {
  const displayNav = () => {
    return NAVIGATIONS.map((val, index) => (
      <S.Link key={index.toString()}>{val.name}</S.Link>
    ))
  }

  return <S.Container>{displayNav()}</S.Container>
}
