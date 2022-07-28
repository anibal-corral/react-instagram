import React from 'react'
import { Grid, Link, Image } from './styles'
import PropTypes from 'prop-types'
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

FavList.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.bool
    })
  )
}
