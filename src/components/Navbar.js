const Navbar = () => {
  return (
    <div className="navbar">
      <div  className="inspo-me">
        <a href="/home">
          <h1>Inspo me!</h1>
        </a>
      </div>
      <div className="nav-links" >
        <a href="/">
          Home
        </a>
        <a href="/about">
          About
        </a>
        <a href="/signin">
          Sign in
        </a>
        <a href="/signup">
          Sign up
        </a>
        </div>
    </div>
  )
}

export default Navbar
