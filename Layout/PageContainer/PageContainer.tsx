import React, { FunctionComponent } from "react"

import Styles from "./PageContainer.module.scss"

type Props = {
  children: React.ReactNode,
  left?: boolean,
  right?: boolean,
  centered?: boolean
}

const PageContainer: FunctionComponent<Props> = ({ children, left, right, centered }: Props) => {

  let classes = " ";
  if (left) classes += Styles.Left
  if (right) classes += Styles.Right
  if (centered) classes += Styles.Centered

  return (
    <section className={`${Styles.PageContainer} ${classes}`}>
      {children}
    </section>
  )
}

export default PageContainer
