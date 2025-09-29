import * as React from "react"

export function useOnWindowResize(callback: () => void) {
  React.useEffect(() => {
    const handleResize = () => {
      callback()
    }

    // Call callback initially to set initial state
    handleResize()

    window.addEventListener("resize", handleResize)
    
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [callback])
}