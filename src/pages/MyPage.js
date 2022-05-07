import { graphql } from 'gatsby'
import React from 'react'

import Gallery from '@browniebroke/gatsby-image-gallery'

const MyPage = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  // `images` is an array of objects with `thumb` and `full`
  return <Gallery images={images} />
}

export const columns = {
  gutter: 0.50,
  rowMargin: 15

}

export const pageQuery = graphql`
  query ImagesForGallery {
    allFile {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 400
              height: 500
              placeholder: BLURRED
         
            )
           
            full: gatsbyImageData(layout: FULL_WIDTH)
            
          }
        }
      }
    }
  }
`

export default MyPage