import React from 'react'
import { Container, BackgroundImage } from './style'
import imageHeader from '../../images/bg-header-desktop.svg'
function Header() {
  return (
    <Container>
      <BackgroundImage src={imageHeader} alt="" />
    </Container>
  )
}
export default React.memo(Header)
