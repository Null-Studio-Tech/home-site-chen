import { useMediaQuery } from "usehooks-ts"

const useIsMobile = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return {
    isMobile
  }
}

export default useIsMobile