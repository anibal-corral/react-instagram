import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

// const LIKE_PHOTO_ANONYMOUS = gql`
// mutation likeAnonymousPhoto($input: LikePhoto!){
//     likeAnonymousPhoto(input: $input){
//         id,
//         liked,
//         likes
//     }
// }
// `
const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!){
    likePhoto(input: $input){
        id,
        liked,
        likes
    }
}
`

export const ToggleLikeMutation = ({ children }) => {
  return (
    <Mutation mutation={LIKE_PHOTO}>
      {children}
    </Mutation>
  )
}
