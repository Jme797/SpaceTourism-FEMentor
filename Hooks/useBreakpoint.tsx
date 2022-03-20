import useWindowSize from "./useWindowSize";

const useBreakpoint = (size: Number) => {
  const { windowWidth } = useWindowSize()

  return !!(windowWidth > size)
}

export default useBreakpoint