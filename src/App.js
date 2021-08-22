import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Navbar from './components/Navbar'
import Signin from './components/Signin'
import Home from './components/Home'
import Signup from './components/Signup'
import About from './components/About'


const App = () => {
  const title = 'Looking for inspo? Find it here!'
  return (
    <div>
      <div className="top-bar">{title}</div>
      <Router>
      <Navbar/>
      <Switch>
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/about' component={About} />
          <Route path='/' component={Home} />
      </Switch>
      </Router>
      </div>
  )
}

export default App;
