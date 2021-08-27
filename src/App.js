import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Navbar from './components/Navbar'
import Signin from './components/Signin'
import Home from './components/Home'
import Signup from './components/Signup'
import AllInspo from './components/AllOutfits'
import SearchByStyle from './components/SearchByStyle'
import { useState, createContext } from 'react'
import bcrypt from 'bcryptjs'
import Footer from './components/Footer'


export const UserProfile = createContext(null)

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"))

  const title = 'Looking for outfit inspo? Find it here!'

  return (
    <>
    <UserProfile.Provider value={{ user, setUser, token, setToken}}>
      <div className="top-bar">{title}</div>
      <Router>
      <Navbar />
      <Switch>
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
         <Route path='/alloutfits' component={AllInspo} />  
         <Route path='/searchbystyle' component={SearchByStyle} />
        <Route path='/' component={Home} />
      </Switch> 
      <Footer />
      </Router>
      </UserProfile.Provider>
      </>
  )
}

export default App;