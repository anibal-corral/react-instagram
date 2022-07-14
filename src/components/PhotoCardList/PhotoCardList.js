import React from 'react'
import { PhotoCard } from '../PhotoCard/PhotoCard'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
import data from '../../../api/db.json'

const photos = graphql(gql`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`)

const PhotoCardListComponent = ({ data: { photos = [] } } = {}) => {
  
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}
const PhotoCardList = photos(PhotoCardListComponent)

export { PhotoCardList }
