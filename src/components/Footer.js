import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <section
      className="pad80 footer-minimal"
      style={{ backgroundColor: "#1cbac8" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>Shahriyar Ahmed</h3>
            <div className="copyright-text">
              <p>
                Copyright © All Rights Reserved. Developed by{" "}
                <Link to="/">The Shahriyar</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
