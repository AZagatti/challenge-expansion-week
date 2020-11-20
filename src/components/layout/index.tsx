import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import GlobalStyles from "../../styles/global"
import Header from "../header"

import { Container } from "./styles"

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <GlobalStyles />
      <Container>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()},{` `}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="http://linkedin.com.br/in/andre-zagatti"
          >
            André Zagatti
          </a>
        </footer>
      </Container>
    </>
  )
}

export default Layout
