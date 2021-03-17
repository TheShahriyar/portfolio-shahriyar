import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        image
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData)

  const { siteTitle, siteDesc, author, siteUrl, image } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={siteTitle}>
      <meta name="description" content={siteDesc} />
      <meta name="author" content={author} />
      <meta name="image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="Shahriyar31dec" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="Website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  )
}

export default SEO
