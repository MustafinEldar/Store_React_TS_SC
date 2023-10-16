import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const SSideBarContainer = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 32px;
  margin-bottom: 16px;

  @media (max-width: 1600px) {
    padding: 24px;
  }
  @media (max-width: 1280px) {
    padding: 16px;
  }
  @media (max-width: 1024px) {
    padding: 8px;
  }
`

export const SSideBarTitle = styled.h1`
  color: white;
`

export const SHr = styled.hr`
  border: 1px solid white;
  width: 100%;
`
export const SNavTab = styled.div<{ last: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;

  // Стилизация для последнего элемента
  ${(props) =>
    props.last &&
    `
    position: absolute;
    height: 50px;
  `}
`
export const SNavIcon = styled.img`
  size: 24;
  color: white;
`
export const SNavTitle = styled.h1`
  color: rgba(200, 200, 200, 0.9);
  font-size: 24px;
  margin-left: 7px;
  font-family: 'Dosis';
  font-weight: 600;
  letter-spacing: 3px;
`
export const SBlock = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`

export const SNavMenu = styled(NavLink)`
  width: 250px;
  text-decoration: none;
  padding-left: 5px;
  position: relative;

  &:hover {
    color: black;

    ${SNavTitle} {
      color: rgba(200, 200, 200, 0.4);
    }
  }

  &.activeLink {
    background-color: white;
    color: blue; // Выберите цвет, который вы хотите использовать для активной ссылки.
    border-radius: 8px;

    ${SNavTitle} {
      color: black; // Выберите цвет, который вы хотите использовать для текста активной ссылки.
    }
  }
`
