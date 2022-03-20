import React, { FunctionComponent } from "react"

import Styles from "./SlideDotControls.module.scss"

type Props = {
  slideCount: Number,
  setSlideNumber: Function,
  slideNumber: Number
}

const SlideDotControls: FunctionComponent<Props> = ({ slideCount, setSlideNumber, slideNumber }: Props) => {

  function handleClick(e: any, i: Number) {
    e.stopPropagation()
    setSlideNumber(i)
  }
  function createDots() {
    const dots = []
    for (let i = 0; i < slideCount; i++) {
      dots.push(
        <button style={{ pointerEvents: "all" }} key={i} onMouseDown={(e) => handleClick(e, i)} className="reset">
          <div className={`${Styles.Dot} ${slideNumber == i ? Styles.Active : ""}`}></div>
        </button>
      )
    }
    return dots
  }
  return (
    <div data-test-id="slide-dot-controls" style={{ pointerEvents: "none" }}>
      {createDots()}
    </div>
  )
}

export default SlideDotControls