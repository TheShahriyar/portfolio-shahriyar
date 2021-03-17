import React from "react"
import Title from "./Title"
import Img from "gatsby-image"
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa"

import { graphql, useStaticQuery } from "gatsby"

export const getImage = graphql`
  {
    aboutImage: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(getImage)

  return (
    <section className="about-section pad-t100 pad-b70">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Title title="About me"></Title>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center">
            <Img fluid={data.aboutImage.childImageSharp.fluid} />
            <ul className="social-links">
              <li>
                <a
                  href="https://www.facebook.com/TheShahriyar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Shahriyar31dec"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/theshahriyar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TheShahriyar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="icon" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:shahriyar.31dec@gmail.com"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope className="icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <div className="about-text">
              <p>
                I'm a Frontend Web Developer with 4+ years of experience. I'm an
                expert in HTML, CSS3, jQuery, Javascript, Bootstrap Framework,
                React, Gatsby, Angular, Photoshop and many more. Generally, I{" "}
                <mark>develop UI</mark> of an application and website and also{" "}
                <mark>convert PSD to HTML</mark> website. All of my website is{" "}
                <mark>100% responsive</mark> and those are perfect in all size
                of devices and all of those are{" "}
                <mark>modern browser supported</mark>. My HTML code is{" "}
                <mark>W3C validated</mark> and <mark>SEO friendly</mark>. I have
                also experience in Joomla and Wordpress. In Beginner of my
                career, I worked on Joomla and Wordpress cms and I also created
                Joomla Template.
              </p>
              <p>
                My professional experience includes bringing the wireframes of
                the UX designer to life through HTML5 and CSS3, as well as
                collaborating with Back End Developers to create a stellar
                finished product.
              </p>
              <ul className="skill-list">
                <li>HTML</li>
                <li>XHTML</li>
                <li>CSS3</li>
                <li>SCSS</li>
                <li>LESS</li>
                <li>Bootstrap 3 & 4</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React.js</li>
                <li>Gatsby JS</li>
                <li>Angular</li>
                <li>SQL</li>
                <li>GraphQL</li>
                <li>Joomla</li>
                <li>WordPress</li>
                <li>Photoshop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
