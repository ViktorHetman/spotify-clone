import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'

import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider'

function Navbar() {
  const [{userInfo}] = useStateProvider()

  return (
    <Container>
      <div className="search_bar">
        <FaSearch />
        <input type="text" placeholder="Artists, songs, or podcasts" />
      </div>
      <div className="avatar">
        <a href="#">
          <CgProfile />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </Container>
  )
}

const Container = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 48px;
 height: 5vh;
 position: sticky;
 top: 0;
 transition: 0.3s ease-in-out;
 background-color: none;
 .search_bar {
   background-color: white;
   width: 30%;
   padding: 7px 24px;
   border-radius: 48px;
   display: flex;
   align-items: center;
   gap: 12px;
   input {
    border: none;
    height: 48px;
    width: 100%;
    &:focus {
      outline: none;
    }
   }
  }
  .avatar {
    background-color: black;
    padding: 5px 6px;
    padding-right: 24px;
    border-radius: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: white;
      font-weight: bold;
      svg {
        font-size: 21px;
        background-color: #282828;
        padding: 3px;
        border-radius: 16px;
        color: #c7c5c5;
      }
    }
   }
`

export default Navbar