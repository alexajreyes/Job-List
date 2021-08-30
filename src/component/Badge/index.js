import React from 'react'
import {
  Container,
  ContentBadge,
  AvatarImage,
  InfoJob,
  TitlesProfesion,
  InfoVacant,
  PositionSought,
  PublicationDate,
  ContainerTitleNew,
  ContainerTitleFeature,
  ContainerRole,
  ContainerLevel,
  ContainerTool,
  ConatinerLanguages,
} from './style'
import Typography from '../Typography'

function Badge({ data }) {
  const NEW = data.new
  const FEATURED = data.featured
  const TOOLS = data.tools
  const LENGUAGE = data.languages

  console.log(data)
  return (
    <Container>
      <ContentBadge>
        <AvatarImage src={data.logo} alt="" />
        <InfoJob>
          <InfoVacant>
            <Typography variant="title3" value={data.company} />
            {NEW === true && (
              <ContainerTitleNew>
                <Typography variant="link" value="New!" />
              </ContainerTitleNew>
            )}

            {FEATURED === true && (
              <ContainerTitleFeature>
                <Typography variant="link2" value="Featured" />
              </ContainerTitleFeature>
            )}
          </InfoVacant>
          <PositionSought>
            <Typography variant="title2" value={data.position} />
          </PositionSought>
          <PublicationDate>
            <Typography variant="body" value={`${data.postedAt}·`} />
            <Typography variant="body" value={`${data.contract}·`} />
            <Typography variant="body" value={`${data.location}·`} />
          </PublicationDate>
        </InfoJob>
        <TitlesProfesion>
          <ContainerRole>
            <Typography variant="title3" value={data.role} />
          </ContainerRole>
          <ContainerLevel>
            <Typography variant="title3" value={data.level}></Typography>
          </ContainerLevel>
          {Array.isArray(TOOLS) &&
            TOOLS.length > 0 &&
            TOOLS.map((_TOOLS, index) => (
              <ContainerTool key={`${index}+${_TOOLS.length}`}>
                <Typography variant="title3" value={_TOOLS} />
              </ContainerTool>
            ))}

          {Array.isArray(LENGUAGE) &&
            LENGUAGE.length > 0 &&
            LENGUAGE.map((_LENGUAGE, index) => (
              <ConatinerLanguages key={`${index}+${_LENGUAGE.length}`}>
                <Typography variant="title3" value="JavaScript" s></Typography>
              </ConatinerLanguages>
            ))}
        </TitlesProfesion>
      </ContentBadge>
    </Container>
  )
}
export default React.memo(Badge)
