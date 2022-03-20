import React, { FunctionComponent } from "react"

import Styles from "./Centered.module.scss"

type Props = {
  children: React.ReactNode,
  vertical?: Boolean
  horizontal?: Boolean
}

const Centered: FunctionComponent<Props> = ({ children, vertical = false, horizontal = false }: Props) => {
  let styles = Styles.Centered
  if (vertical) styles = Styles.Vertical
  if (horizontal) styles = Styles.Horizontal
  return (
    <section className={styles}>
      {children}
    </section>
  )
}

export default Centered
