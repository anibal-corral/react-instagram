import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

// export const Detail = ({ detailId }) => {
  
//   return (
//     // <Layout title={`Photo ${detailId}`}>
//     <>
// <PhotoCardWithQuery id={detailId} />
// </>
//     // </Layout>
    
//   )
// }
export default ({ detailId }) => {
  
  return (
    // <Layout title={`Photo ${detailId}`}>
    <>
<PhotoCardWithQuery id={detailId} />
</>
    // </Layout>
    
  )
}
