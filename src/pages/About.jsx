import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledAbout = styled.span`
width:100%;
height:100%

font-size=2rem;





`


const Styledlink = styled(Link)`
  display: inline-block;
  color: white;
  background-color: black;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin: 10px;
`




export default function About(props) {
                    const {children} = props
  return (
    <StyledAbout {...props}>
                    {children}
                    <br/>
 <Styledlink  to="/">Home</Styledlink>


    </StyledAbout>
  )
}
