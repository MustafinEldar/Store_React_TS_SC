import React from 'react'
import { SLoading, SLoadingIcon, SLoadingTitle } from './Loading.styled'

export const Loading = () => {
  return (
    <SLoading>
      <SLoadingTitle>Страница в разработке</SLoadingTitle>
      <SLoadingIcon />
    </SLoading>
  )
}
