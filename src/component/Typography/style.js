import styled, { css } from 'styled-components'

const Primitive = css`
  font-family: 'Spartan', sans-serif;
  font-style: normal;
  font-weight: 500;
  text-align: ${({ align }) => (align ? align : 'left')};
  margin-top: ${({ mt }) => (mt ? mt : 0)};
  margin-bottom: ${({ mb }) => (mb ? mb : 0)};
  margin-left: ${({ ml }) => (ml ? ml : 0)};
  margin-right: ${({ mr }) => (mr ? mr : 0)};
`

export const Title = styled.h1`
  ${Primitive}
  font-weight: bold;
  font-size: 4em;
  color: #ffffff;
  @media (min-width: 680px) {
    font-size: 3em;
    line-height: 64px;
  }
  @media (min-width: 850px) {
    font-size: 56px;
  }
`
export const Title2 = styled.h2`
  ${Primitive}
  font-size: 15px;
  font-weight: 700;
  color: #2c3a3a;
`

export const Title3 = styled.h3`
  ${Primitive}
  font-weight: 700;
  font-size: 15px;
  line-height: 23px;
  color: #5ba4a4;
`
export const Title4 = styled.h4`
  ${Primitive}
  font-weight: 500;
  font-size: 24px;
  line-height: 23px;
  color: #2d2e40;
`
export const Link = styled.h3`
  ${Primitive}
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-weight: 700;
  font-size: 12px;
  color: white;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const Link2 = styled.h3`
  ${Primitive}
  font-weight:700;
  font-size: 12px;
  color: white;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const Body = styled.p`
  ${Primitive}
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  color: #7b8e8e;
  @media (min-width: 680px) {
    font-size: 16px;
    line-height: 26px;
  }
`

export const Caption = styled.span`
  ${Primitive}
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: #2d2e40;
`

export const Caption2 = styled.span`
  ${Primitive}
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: #2d2e40;
`
