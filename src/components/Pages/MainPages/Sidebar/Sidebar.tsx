import React, { useCallback, useMemo } from 'react'
import {
  SBlock,
  SHr,
  SNavMenu,
  SNavTab,
  SNavTitle,
  SSideBarContainer,
  SSideBarTitle,
} from './Sidebar.styled'
import { IconType } from 'react-icons'
import { arrNavMenu } from '../../../../mock/mock'
import { useLocation } from 'react-router-dom'

interface IMenu {
  pages: string
  name: string
  icon: IconType
}

export const Sidebar = () => {
  const location = useLocation()
  const lastIndex = useMemo(() => arrNavMenu.length - 1, [])

  const isActiveLink = useCallback(
    (path: string) => {
      return location.pathname === path ? 'activeLink' : ''
    },
    [location.pathname],
  )

  const navMenu = useMemo(
    () =>
      arrNavMenu.map((el: IMenu, index: number) => (
        <SNavMenu to={el.pages} className={isActiveLink(el.pages)}>
          <SNavTab last={index === lastIndex}>
            <el.icon
              size={24}
              color={isActiveLink(el.pages) ? 'black' : 'white'}
            />
            <SNavTitle>{el.name}</SNavTitle>
          </SNavTab>
        </SNavMenu>
      )),
    [isActiveLink, lastIndex],
  )

  return (
    <SSideBarContainer>
      <SBlock>
        <SSideBarTitle>GameStore</SSideBarTitle>
        <SHr />
        {navMenu.slice(0, 4)}
        <SHr />
        {navMenu.slice(4, 6)}
        <SHr />
        {navMenu.slice(6, 7)}
      </SBlock>
    </SSideBarContainer>
  )
}
