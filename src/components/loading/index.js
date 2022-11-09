import React from 'react'
import icon from 'assets/images/favicon.png'
import { Image, LoadingAnimation, LoadingBoder, LoadingContainer, LoadingIcon } from './style'

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingBoder>
        <LoadingAnimation></LoadingAnimation>
      </LoadingBoder>
      <LoadingIcon><Image src={icon} /></LoadingIcon>
    </LoadingContainer>
  )
}

export default Loading