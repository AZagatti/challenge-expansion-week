import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"

interface IndexProps {
  data: {
    allFile: {
      edges: Array<{
        node: {
          internal: {
            content: string
          }
        }
      }>
    }
  }
}

interface SectionType {
  sections: Array<{
    id: number
    title: string
    paragraphs: string[]
  }>
}

const Index: React.FC<IndexProps> = ({ data }) => {
  const { content } = data.allFile.edges[0].node.internal

  const { sections }: SectionType = JSON.parse(content)
  return (
    <Layout>
      <SEO title="Home" />
      <Section sections={sections} />
    </Layout>
  )
}

export default Index

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "data" } }) {
      edges {
        node {
          internal {
            content
          }
        }
      }
    }
  }
`
