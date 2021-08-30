import React from 'react'
import { Container, BadgeContainer } from './style'
import Header from '../../component/Header'
import Badge from '../../component/Badge'
import { data } from '../../services/data'

function Home() {
  return (
    <Container>
      <Header />
      {Array.isArray(data) &&
        data.length > 0 &&
        data.map((_data, index) => (
          <BadgeContainer key={`${index}+${_data.id}`}>
            <Badge data={_data} />
          </BadgeContainer>
        ))}
    </Container>
  )
}
export default React.memo(Home)
