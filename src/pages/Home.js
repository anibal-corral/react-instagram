import React from 'react'
import { CategoryList } from '../components/CategoryList/CategoryList'
import { PhotoCardListContainer } from '../containers/PhotoCardListContainer'

export const Home = ({ categoryId }) => {
  return (
    <>
      <CategoryList />
      <PhotoCardListContainer categoryId={categoryId} />
    </>
  )
}
