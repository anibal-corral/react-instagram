import React from 'react'
import { ImgWrapper, Img, Button } from './styles'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
function PhotoCard ({ id, likes = 0, src = DEFAULT_IMAGE }) {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>

      </a>
      <Button>
        <FcLikePlaceholder size='32px' />{likes} likes!
      </Button>
    </article>
  )
}
export { PhotoCard }
