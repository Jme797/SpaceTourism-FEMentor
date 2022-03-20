import React, { FunctionComponent } from "react"

import { breakpoints } from "../../Config"
import useBreakpoint from "../../Hooks/useBreakpoint"
import useWindowSize from "../../Hooks/useWindowSize"

import Styles from "./TwoColumn.module.scss"

type Props = {
  children: Array<JSX.Element>,
  verticallyCentered?: Boolean,
  collapse?: Boolean,
  leftColumns?: Number,
  rightColumns?: Number,
  reverse?: Boolean
}

const TwoColumn: FunctionComponent<Props> = ({ children, verticallyCentered, leftColumns = 1, rightColumns = 1, collapse = true, reverse = false }: Props) => {
  // Calculate Column sizes.
  let columns: string = "1fr";
  if (useBreakpoint(breakpoints.lg) || !collapse) columns = `${leftColumns}fr ${rightColumns}fr`

  return (
    <div className={Styles.TwoColumn} style={{ gridTemplateColumns: columns }}>
      <section className={verticallyCentered ? Styles.verticallyCentered : ""}>
        {children[reverse ? 1 : 0]}
      </section>
      <section className={verticallyCentered ? Styles.verticallyCentered : ""}>
        {children[reverse ? 0 : 1]}
      </section>
    </div>
  )
}


export default TwoColumn