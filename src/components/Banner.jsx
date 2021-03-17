import React from "react"
import { Link } from "react-scroll"
import BackgroundImage from "gatsby-background-image"
import { graphql, StaticQuery } from "gatsby"

const Banner = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg/banner.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          id="hero-banner"
          className="parallax"
          fluid={imageData}
          style={{ backgroundPositionY: "20%" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="preview-banner text-center white">
                  <h1>I'm Shahriar Ahmed</h1>
                  <h4>Front End Developer</h4>

                  <Link
                    to="portfolio"
                    smooth={true}
                    className="btn btn-primary"
                    duration={1500}
                  >
                    View My Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default Banner
