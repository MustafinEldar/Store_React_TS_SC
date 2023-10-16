import styled from 'styled-components'
import { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const SLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  font-size: 60px;
`
export const SLoadingIcon = styled.div`
  background-image: url('../../images/loading.ico');
  background-size: 100% 100%;
  animation: ${rotate} 10s linear infinite;
  width: 100px;
  height: 100px;
`
export const SLoadingTitle = styled.h1`
  font-size: 60px;
  color: black;
`
