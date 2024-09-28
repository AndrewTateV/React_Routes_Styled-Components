import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

export default function ShowSomething() {
  const { id, username } = useParams()
  return (
    <div>ShowSomething: {id} {username}</div>
  )
}
