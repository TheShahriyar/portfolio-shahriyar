import React from "react"
import Title from "./Title"
import { useStaticQuery, graphql } from "gatsby"
import PortfolioTemplate from "./PortfolioTemplate"

const ReactPortfolio = graphql`
  {
    reactPortfolio: allContentfulPortfolio(filter: {projectType: {eq: "React"}}) {
      edges {
        node {
          id
          title
          portfolioDemoLink
          projectType
          projectTechnology {
            projectTechnology
          }
          portfolioImage {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  
    
  }
`

const PortfolioReact = ({bgColor}) => {
  const response = useStaticQuery(ReactPortfolio)

  const portfolio = response.reactPortfolio.edges;

  return (  
    <section
      id="portfolioReact"
      className="pad-t100 pad-b70"
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Title title="React Portfolio"></Title>
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

export default PortfolioReact
