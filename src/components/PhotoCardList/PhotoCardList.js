import React from 'react'
import { PhotoCard } from '../PhotoCard/PhotoCard'
import data from '../../../api/db.json'

function PhotoCardList () {
  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}

export { PhotoCardList }
