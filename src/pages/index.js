import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/style.css"
import Banner from "../components/Banner"
import About from "../components/About"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import PortfolioReact from "../components/PortfolioReact"
import PortfolioHTML from "../components/PortfolioHTML"

export default () => (
  <>
    <SEO title="Shahriyar Ahmed - Front End Developer"></SEO>
    <Banner />
    <About />
    <PortfolioReact bgColor="#f9f9f9" />
    <PortfolioHTML bgColor="#f5f5f5" />
    <CallToAction />
    <Footer />
  </>
)
