import React from 'react'
import { PhotoCard } from '../PhotoCard/PhotoCard'

const PhotoCardList = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}

export { PhotoCardList }
