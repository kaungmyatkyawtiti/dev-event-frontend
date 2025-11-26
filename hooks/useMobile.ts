import { useEffect, useState } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    mql.addEventListener("change", onChange)

    // set ini val on mount
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    // cleanup 
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
