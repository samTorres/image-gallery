import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from 'gatsby'
import Gallery from '@browniebroke/gatsby-image-gallery'


 const IndexPage = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  // `images` is an array of objects with `thumb` and `full`
  return <Layout>
        <Seo title="Home" />
         
        <Gallery
        images={images}
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

export default IndexPage
