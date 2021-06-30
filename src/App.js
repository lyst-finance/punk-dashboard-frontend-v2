import Topbar from './components/topbar/Topbar.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Home from './pages/home/home.jsx';
import Team from './pages/home/team/team';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './app.css'

function App() {
  return (
    <Router>
      <Topbar/>
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route exact path = '/'>
            <Home />
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
