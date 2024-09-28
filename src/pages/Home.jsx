import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
const StyledHome = styled.span `
color: white;
font-size: 24px;
background-color: ${props => props.$bg_color || 'black'};
padding: 10px;
border-radius: 5px;
display:inline-block;

> * {
front-size:20px;
front-style:italic;

}

&:hover{
                    background-color:blue
}




`

export default function Home(props) {
                    const { children, bg_color, img_src } = props
                    return (
                      <StyledHome $bg_color={bg_color}>
                        Hello, {children}!
                        <Button as ={Link}  to="/about">About</Button>
                      </StyledHome>
                    )
                  }
                  
