import React from 'react'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

export const Detail = ({ detailId }) => {
  console.log('Detail id ', detailId)
  return (
    <PhotoCardWithQuery id={detailId} />
  )
}
