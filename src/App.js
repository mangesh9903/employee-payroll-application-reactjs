
import './App.css';

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import AddEmployeeComp from './Components/AddEmployeeComp';

function App() {

  return (
    <div className="App">
      <div className='container'>
       <Router>
       <Switch>
          <Route path="/" exact component={ListEmployeeComponent}></Route>
          <Route path="/employees" component={ListEmployeeComponent}></Route>
          <Route path="/add-employee" component={AddEmployeeComp}></Route>
        </Switch>
       </Router>
      </div>


  {/* <Router>
          <Switch>
            
            <Route exact path ="/">
              <HomePage />
            </Route>
            <Route path="/employee">
              <PayrollForm />
            </Route>
          </Switch>
        </Router> */}
            {/* <Router>
      <div> */}
          {/* <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/payrollForm">PayrollForm</Link>
            </li>
          
          </ul> */}

        {/* <Switch>
          <Route path="/home">
            <HomePage/>
          </Route>
          <Route path="/payrollForm">
            <PayrollForm />
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router> */}
    </div>
  );
}

export default App;
