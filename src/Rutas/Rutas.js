import Login from "../Login/Login";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"


function Rutas() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* nombre de función a utilizar*/}
          <Login />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default Rutas;
