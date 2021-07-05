import Sidebar from './components/sidebar/Sidebar.jsx';
import Home from './pages/home/home.jsx';
import Team from './pages/home/team/team';
import LearnMore from './pages/learnMore/learnMore.jsx'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './app.css'

function App() {
  return (
    <Router>
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route exact path = '/'>
            <Home />
          </Route>
          <Route exact path ='/learnMore'>
           <LearnMore /> 
          </Route>
          <Route path = '/team'>
            <Team />
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
