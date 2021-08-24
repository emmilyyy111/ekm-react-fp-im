import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Navbar from './components/Navbar'
import Signin from './components/Signin'
import Home from './components/Home'
import Signup from './components/Signup'
import allInspo from './components/AllOutfits'
import { useState, createContext } from 'react'


export const UserProfile = createContext(null)

const App = () => {
  const[user, setUser] = useState(null);
  
  const title = 'Looking for inspo? Find it here!'

  return (
    <>
    <UserProfile.Provider value={{ user, setUser}}>
      <div className="top-bar">{title}</div>
      <Router>
      <Navbar />
      <Switch>
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/alloutfits' component={allInspo} />
          <Route path='/' component={Home} />
      </Switch>
      </Router>
      </UserProfile.Provider>
      </>
  )
}

export default App;
