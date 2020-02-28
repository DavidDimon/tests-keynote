import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 50vw;
  height: 70vh;
`

const WrapperContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.span`
  font-size: 60px;
  margin-bottom: 50px;
`

const SubTitle = styled.span`
  font-size: 25px;
  color: #ccc;
`

export default () => (
  <Wrapper>
    <WrapperContent>
      <Title>Testes(javascript)</Title>

      <SubTitle>Para que serve e como fazer?</SubTitle>
    </WrapperContent>
  </Wrapper>
)
