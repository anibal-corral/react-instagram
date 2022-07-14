import React, { Fragment, useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
function PhotoCard ({ id, likes = 0, src = DEFAULT_IMAGE }) {
  const [show, setShow] = useState(false)
  const key = `like-${id}`
  const [liked, setLiked] = useState(
    () => {
      try {
        return window.localStorage.getItem(key)
      } catch (error) {
        console.log(error)
        return false
      }
    }

  )

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

  const Icon = liked ? FcLike : FcLikePlaceholder
  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Article ref={ref}>
      {
        show && <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>

          </a>
          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size='32px' />{likes} likes!
          </Button>
                </>
      }

    </Article>
  )
}
export { PhotoCard }
