import React from 'react'
import { CategoryList } from '../components/CategoryList/CategoryList'
import { PhotoCardListContainer } from '../containers/PhotoCardListContainer'
import { Layout } from '../components/Layout/Layout'

export const Home = ({ categoryId }) => {
  return (
    // <Layout title={`Petsgram - Your app for your pet photos`} subtitle={`With this app you can find nice pet pictures`}>
    <><CategoryList />
    <PhotoCardListContainer categoryId={categoryId} /></>
      
    // </Layout>
  )
}
