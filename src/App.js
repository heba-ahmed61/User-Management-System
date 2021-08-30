import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter ,Switch ,Route} from "react-router-dom";
import Home from './Components/Home/Home';
import {UserProvider} from './Components/UserContext/UserContext'
import Delete from './Components/Delete/Delete';
import Read from './Components/Read/Read';
import CreateUser from './Components/CreateUser/CreateUser';
import EditUser from './Components/EditUser/EditUser';



function App() {
return (
      <div className="app">
            <div className="title my-5">

            <h3 className="text-center"> User Management System</h3>
            </div>

      
      <UserProvider>
      <BrowserRouter>
      <Switch>

      <Route exact path="/" ><Home/></Route>
      <Route exact path="/createuser" ><CreateUser/></Route>
      <Route exact path="/read/:id" ><Read/></Route>
      <Route exact path="/edituser/:id" ><EditUser/></Route>
      <Route path="/delete/:id"><Delete/></Route>
            </Switch>
      </BrowserRouter>
      </UserProvider>

      </div>




      

      
      );
}

export default App;
