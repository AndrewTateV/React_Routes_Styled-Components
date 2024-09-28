import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
const StyledPageNotFound = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  inset: 0;
  background-color: black;
  color: white;
  display: grid;
  place-items: center;
  font-size: 2rem;
`

export default function PageNotFound() {
  return (
    <StyledPageNotFound>404 PageNotFound
                     <Button as ={Link}to="/">Home</Button>
    </StyledPageNotFound>
  )
}
