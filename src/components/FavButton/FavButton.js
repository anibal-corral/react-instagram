import React, { Fragment } from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { Button } from './styles'
function FavButton ({ liked, likes, onClick }) {
  const Icon = liked ? FcLike : FcLikePlaceholder
  return (
    <>
      <Button onClick={onClick}>
        <Icon size='32px' />{likes} likes!
      </Button>
    </>
  )
}

export { FavButton }
