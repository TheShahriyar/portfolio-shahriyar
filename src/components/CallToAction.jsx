import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, StaticQuery } from "gatsby"

const CallToAction = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg/bg10.jpg" }) {
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
          className="pad80 parallax"
          fluid={imageData}
          style={{ backgroundPosition: "50 50" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="call-to-action-2 text-center white">
                  <h3>
                    <span>Want to Hire me?</span>
                  </h3>
                  <a
                    href="mailto:shahriyar.31dec@gmail.com"
                    className="btn btn-primary"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default CallToAction
