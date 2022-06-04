import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
    </div> 
  

   
  </Layout>
)

const myStyle={
  backgroundImage: 
  "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
  backgroundSize: 'cover',
}

export default IndexPage
