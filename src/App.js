import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AddUserComponent from './components/user/AddUserComponent'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListUserComponent from './components/user/ListUserComponent'
import EditUserComponent from './components/user/EditUserComponent'

function App() {
  return (
    <div className="container">
        <Router>
            <div className="col-md-6">
               <h1 className="text-center" style={style}>React User Application</h1>
               <Switch>
                    <Route path="/" exact component={ListUserComponent} />
                    <Route path="/users" component={ListUserComponent} />
                    <Route path="/add-user" component={AddUserComponent} />
                    <Route path="/edit-user" component={EditUserComponent} />
                </Switch>
            </div>
        </Router>
    </div>
  )
}

const style={
  color: 'red',
  margin: '10px'
}

export default App;
