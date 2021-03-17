import React from 'react'
import Img from "gatsby-image"

const PortfolioTemplate = ({ items }) => {
  
  
  return (
    <>
      <div className="col-md-4">
        <div className="product-showcase">
          <a
            href={items.portfolioDemoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img fluid={items.portfolioImage.fluid} alt="theshahriyar" />
            <div className="project-details">
              <p>{items.title}</p>
              <p className="tech">{items.projectTechnology.projectTechnology}</p>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default PortfolioTemplate
