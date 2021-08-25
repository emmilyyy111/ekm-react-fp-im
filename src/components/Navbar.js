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
        <a href="/home">
          Home
        </a>
      
        <a href="/alloutfits">
          All Inspo
        </a>
    {!token
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
  <>
        <a href="/signout">
          Signout
        </a>
        <a href="/searchbystyle">
          Search
        </a>
        </>
  }
        </div>
    </nav>
  )
}

export default Navbar;
