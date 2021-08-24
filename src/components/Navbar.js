import userEvent from "@testing-library/user-event";
import { useState, useEffect, useContext } from "react"
import AllInspo from "./AllOutfits"
import { UserProfile } from '../App'


const Navbar = () => {
const {user} = useContext(UserProfile)

  return (
    <nav className="navbar">
      <div  className="inspo-me">
        <a href="/home">
          <h1>Inspo me!</h1>
        </a>
      </div>
      <div className="nav-links" >
        <a href="/home">
          Home
        </a>
      
        <a href="/alloutfits">
          All Inspo
        </a>
    {!user
    ? 
    <>
    <a href="/signin">
          Sign in
        </a>
        <a href="/signup">
          Sign up
        </a>
    </>
  : 
        <a href="/signout">
          Signout
        </a>
  }
        </div>
    </nav>
  )
}

export default Navbar;
