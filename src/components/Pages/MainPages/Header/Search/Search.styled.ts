import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const SSearchIcon = styled(BsSearch)`
  box-sizing: border-box;
  padding: 10px;
  width: 42.5px;
  height: 42.5px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  color: #07051a;
  text-align: center;
  font-size: 1.2em;
  transition: all 1s;
`

export const SSearch = styled.div`
  margin: auto;
`
export const SSearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 125px;
  height: 42.5px;
  line-height: 30px;
  outline: 0;
  border: 0;
  display: none;
  font-size: 1em;
  border-radius: 20px;
  padding: 0 20px;
`

export const SSearchForm = styled.div`
  position: relative;
  top: 20px;
  transform: translate(-50%, -50%);
  transition: all 1s;
  width: 50px;
  height: 50px;
  background: white;
  box-sizing: border-box;
  border-radius: 25px;
  border: 4px solid white;
  padding: 5px;
  z-index: 1;

  &:hover {
    width: 200px;
    cursor: pointer;

    ${SSearchInput} {
      display: block;
    }

    ${SSearchIcon} {
      background: #07051a;
      color: white;
    }
  }
`

export const SSearchResults = styled.div`
  position: absolute;
  min-width: 180px;
  min-height: 30px;
  border-radius: 20px;
  background-color: rgb(254, 254, 254, 0.7);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  top: 50px;
`

export const SSearchResultLink = styled(Link)`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  &:hover {
    background-color: #ddd;
    border-radius: 20px;
  }
`
