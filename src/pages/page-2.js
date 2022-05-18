import * as React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Gallery from '@browniebroke/gatsby-image-gallery'
import Header from "../components/header"


const SecondPage = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  // `images` is an array of objects with `thumb` and `full`
  return <Layout>
      <Gallery
        images={images}
        mdColWidth={33}
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
