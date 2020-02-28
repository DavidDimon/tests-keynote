import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 50vw;
  height: 70vh;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`

const Image = styled.img`
  margin-bottom: 50px;
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
`

export default props => (
  <Wrapper>
    <Image {...props}/>
  </Wrapper>
)
