import { useEffect, useRef, useState } from 'react'
function useNearScreen () {
  const [show, setShow] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    // console.log(ref.current)
    const observer = new window.IntersectionObserver((entries) => {
      // console.log(entries)
      const { isIntersecting } = entries[0]
      console.log(isIntersecting)
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(ref.current)
  }, [ref])
  return [show, ref]
}

export { useNearScreen }
