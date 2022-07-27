import React from 'react'
import { Grid, Link, Image } from './styles'

export const FavList = ({ favs = [] }) => {
  console.log('FavsList ', favs)
  return (
    <Grid>
      {
    favs.map(fav => <Link to={`/detail/${fav.id}`} key={fav.id}>
      <Image src={fav.src} />
    </Link>
    )
}
    </Grid>
  )
}
