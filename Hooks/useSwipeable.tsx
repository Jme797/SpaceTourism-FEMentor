const useSwipeable = (element: HTMLDivElement, onSwipeLeft: Function, onSwipeRight: Function, leftPosition: string = "0px") => {

  let touchstartX = 0
  let touchendX = 0

  function handleGesture() {
    if (touchendX < touchstartX) {
      onSwipeLeft()
    }
    if (touchendX > touchstartX) {
      onSwipeRight()
    }
  }

  function touchMove(e: TouchEvent) {
    const mousePosition = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    };
    element.style.left = mousePosition.x + "px"
  }

  function touchStart(e: TouchEvent) {
    element.addEventListener('touchend', touchEnd)
    document.addEventListener('touchmove', touchMove)
    touchstartX = e.changedTouches[0].clientX
    element.style.transform = "translateX(-50%)"
    element.style.transition = "0s"
    element.style.left = e.changedTouches[0].clientX + "px"
  }

  function touchEnd(e: TouchEvent) {
    touchendX = e.changedTouches[0].clientX
    element.style.transition = "0.3s"
    element.style.left = leftPosition
    element.style.transform = ""
    document.removeEventListener('touchmove', touchMove)
    handleGesture()
  }

  element.addEventListener('touchstart', touchStart)

  return () => {
    element.removeEventListener('touchstart', touchStart)
    element.removeEventListener('touchend', touchEnd)
    document.removeEventListener('touchmove', touchMove)
  }
}

export default useSwipeable