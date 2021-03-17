import React from "react"
import Title from "./Title"
import { useStaticQuery, graphql } from "gatsby"
import PortfolioTemplate from "./PortfolioTemplate"

const HTMLPortfolio = graphql`
  {
    htmlPortfolio: allContentfulPortfolio(
      filter: {projectType: {eq: "HTML"}}
      sort: {order: DESC, fields: id}
    ) {
      edges {
        node {
          id
          title
          portfolioDemoLink
          projectType
          portfolioImage {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          projectTechnology
          }
      }
    }
  
    
  }
`

const PortfolioHTML = ({bgColor}) => {
  const response = useStaticQuery(HTMLPortfolio)

  const portfolio = response.htmlPortfolio.edges;

  return (   
    <section
      id="portfolioReact"
      className="pad-t100 pad-b70"
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Title title="HTML CSS Bootstrap Portfolio"></Title>
          </div>
        </div>
        <div className="row">
          {portfolio.map(({ node }) => {
            return (
              <PortfolioTemplate key={node.id} items={node} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PortfolioHTML
