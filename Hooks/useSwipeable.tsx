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

  function touchStart(e: TouchEvent) {
    element.addEventListener('touchend', touchEnd)
    touchstartX = e.changedTouches[0].clientX
  }

  function touchEnd(e: TouchEvent) {
    touchendX = e.changedTouches[0].clientX
    handleGesture()
  }

  element.setAttribute('data-test-id', 'swipeable-element')
  element.addEventListener('touchstart', touchStart)
  
  return () => {
    element.removeEventListener('touchstart', touchStart)
    element.removeEventListener('touchend', touchEnd)
  }
}

export default useSwipeable