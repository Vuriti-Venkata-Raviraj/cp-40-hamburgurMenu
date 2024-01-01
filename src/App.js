import {Redirect, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
)

export default App
