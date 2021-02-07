import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <>
      <Router>
        <Route exact path='/'>
          <Login/>
        </Route>
        <Route exact path='/register'>
          <Register/>
        </Route>
      </Router>
    </>
  );
}

export default App;
