import Sidebar from './components/sidebar/Sidebar.jsx';
import Home from './pages/home/home.jsx';
import Team from './pages/team/team';
import LearnMore from './pages/learnMore/learnMore.jsx'
import Borrow from './pages/Borrow/borrow.jsx'
import Topbar from './components/topbar/Topbar'
import Farm from './pages/farm/farm'
import Calc from './pages/calc/calc'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './app.css'
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Router>
      <div className='container'>
      <Grid container spacing={2} justify="center" >

        <Grid item xs={2}>  
        
            <Sidebar />
        </Grid>
        <Grid item xs={10} className='pages'> 
        <div className='topbar'>
        <Topbar /> 
        </div> 
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
          <Route path = '/borrow'>
  {/*Farm is the coming soon page*/}
            <Farm />
          </Route>
          <Route path = '/farm'>
            <Farm />
          </Route>
          <Route path = '/calc'>
            <Farm />
          </Route>
        </Switch> 
        </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
