import React, { FunctionComponent, Ref, RefObject } from "react"

import Styles from "./Fixed.module.scss"

type Props = {
  children: React.ReactNode,
  offset?: Number,
  elRef?: any,
  pointerEvents?: Boolean
}

const FixedBottom: FunctionComponent<Props> = ({ children, offset = 0, elRef, pointerEvents = true }: Props) => {
  return (
    <section ref={elRef} className={Styles.FixedBottom} style={{ pointerEvents: pointerEvents ? "auto" : "none", bottom: `${offset}px` }}>
      {children}
    </section>
  )
}

const FixedRight: FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <section className={Styles.FixedRight}>
      {children}
    </section>
  )
}

export { FixedBottom, FixedRight }
