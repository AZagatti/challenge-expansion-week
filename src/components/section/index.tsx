import React from "react"
import parse from "html-react-parser"

import Call from "../../images/call.svg"
import Chat from "../../images/chat.svg"
import Text from "../../images/text.svg"
import Communication from "../../images/communication.svg"

import Svg from "../svg"

import { Container } from "./styles"

const images = [
  {
    img: <Call />,
    footer:
      '<a rel="noreferrer noopener" href="https://undraw.co/search">Communication em - https://undraw.co/</a>',
  },
  {
    img: <Chat />,
    footer:
      '<a rel="noreferrer noopener" href="https://undraw.co/search">Communication em - https://undraw.co/</a>',
  },
  {
    img: <Text />,
    footer:
      '<a rel="noreferrer noopener" href="https://undraw.co/search">Communication em - https://undraw.co/</a>',
  },
  {
    img: <Communication />,
    footer:
      '<a rel="noreferrer noopener" href="https://br.freepik.com/vetores/brochura">Brochura vetor criado por katemangostar - br.freepik.com</a>',
  },
]

interface SectionProps {
  sections: Array<{
    id: number
    title: string
    paragraphs: string[]
  }>
}

const Section: React.FC<SectionProps> = ({ sections }) => {
  return (
    <>
      {sections?.map(section => (
        <Container key={section.id}>
          <h1>{section.title}</h1>
          {images[section.id] ? (
            <Svg>
              <>
                {images[section.id].img}
                <span>{parse(images[section.id].footer)}</span>
              </>
            </Svg>
          ) : null}
          {section.paragraphs.map(paragraph => (
            <p key={paragraph}>{parse(paragraph)}</p>
          ))}
        </Container>
      ))}
    </>
  )
}

export default Section
