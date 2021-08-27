import { useContext } from "react"
import { UserProfile } from '../App'
import Home from './Home'


const Navbar = () => {
const {token} = useContext(UserProfile)


  return (
    <nav className="navbar">
      <div  className="inspo-me">
        <a href="/home">
          <h1>Inspo me!</h1>
        </a>
      </div>
      <div className="nav-links">
    {!token 
    ? (
    <>
        <a href="/home">
          Home
        </a>
        <a href="/alloutfits">
          All Inspo
        </a>
    <a href="/signin">
          Sign in
        </a>
        <a href="/signup">
          Sign up
        </a>
    </>
     ) : (
  <>
        <a href="/home">
          Home
        </a>
        <a href="/alloutfits">
          All Inspo
        </a>
        <a href="/searchbystyle">
          Search Styles
        </a>
        <a href="/signout" onClick={() => localStorage.clear()}>
          Signout
        </a>
        </>
     )}
        </div>
    </nav>
  )
}

export default Navbar;