import React, { useEffect, useState } from "react"

const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { windowWidth, windowHeight }
}

export default useWindowSize