import { Link } from "gatsby"
import React from "react"

import { Container } from "./styles"

const Header = ({ siteTitle = "" }: { siteTitle: string }) => (
  <Container>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </Container>
)

export default Header
