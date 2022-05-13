import * as React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Gallery from '@browniebroke/gatsby-image-gallery'


const SecondPage = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  // `images` is an array of objects with `thumb` and `full`
  return <Layout>
      <h2>Gatsby image gallery demo</h2>
      <p>A very simple page to demo the gallery component.</p>
      <Gallery
        images={images}
        mdColWidth={25}
        gutter={".50rem"}
        colWidth={25}
        rowMargin={-200}
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
