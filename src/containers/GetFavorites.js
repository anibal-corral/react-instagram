import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { FavList } from '../components/FavsList/FavList'

const GET_FAVS = gql`
query getFavs {
  favs {
    id
    categoryId
    src
    likes
    userId
  }
}
`
const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  console.log('error => ', error)
  if (error) return <p>Error! </p>
  console.log('data ', data)
  const { favs } = data
  console.log('favs', favs)
  return (
    <FavList favs={favs}>FavsWithQuery</FavList>
  )
}

export const FavsWithQuery = () => {
  return (
    <Query query={GET_FAVS} fetchPolicy='network-only'>
      {renderProp}

    </Query>
  )
}
