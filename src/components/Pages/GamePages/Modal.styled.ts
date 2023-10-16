import styled from 'styled-components'

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  width: 400px;
  background-color: #1b2838;
  border-radius: 10px;
  padding: 20px;
  color: #c7d5e0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
