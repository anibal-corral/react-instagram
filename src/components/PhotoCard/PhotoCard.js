import React, { Fragment } from 'react'
import { ImgWrapper, Img, Article } from './styles'

import { useLocalStorage } from '../../Hooks/useLocalStorage'
import { useNearScreen } from '../../Hooks/useNearScreen'
import { FavButton } from '../FavButton/FavButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
function PhotoCard ({ id, likes = 0, src = DEFAULT_IMAGE }) {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {
        show && <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>

          </a>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  !liked && toggleLike({
                    variables:
                {
                  input: { id }
                }
                  })
                  setLiked(!liked)
                }
                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>

        </>
      }

    </Article>
  )
}
export { PhotoCard }
