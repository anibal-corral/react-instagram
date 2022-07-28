import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
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

FavButton.prototype = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export { FavButton }

