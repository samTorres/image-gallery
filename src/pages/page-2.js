import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

import Gallery from '@browniebroke/gatsby-image-gallery'



const SecondPage = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  // `images` is an array of objects with `thumb` and `full`
  return <Layout>

    
      <Gallery
        imag={images}
        mdColWidth={20}
        gutter={".25rem"}
        colWidth={100}
        
      />
    </Layout>  
}

export const pageQuery = graphql`
  query ImagesForGallery {
    allFile {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 400
              height: 600
              placeholder: BLURRED
         
            )
           
            full: gatsbyImageData(layout: FULL_WIDTH)
            
          }
        }
      }
    }
  }
`




export default SecondPage
