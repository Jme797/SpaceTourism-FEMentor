import React, { FunctionComponent } from "react"

import Styles from "./SlideNumberedControls.module.scss"

type Props = {
  slideCount: Number,
  setSlideNumber: Function,
  slideNumber: Number
}

const SlideNumberedControls: FunctionComponent<Props> = ({ slideCount, setSlideNumber, slideNumber }: Props) => {
  function createDots() {
    const dots = []
    for (let i = 0; i < slideCount; i++) {
      dots.push(
        <button key={i} onClick={() => setSlideNumber(i)} className="reset">
          <div className={`${Styles.Dot} ${slideNumber == i ? Styles.Active : ""}`}><h1 className="font-sm">{i + 1}</h1></div>
        </button>
      )
    }
    return dots
  }
  return (
    <div className={Styles.container}>
      {createDots()}
    </div>
  )
}

export default SlideNumberedControls