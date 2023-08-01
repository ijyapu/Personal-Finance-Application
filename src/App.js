import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Account from './pages/Account';
import AddBill from './pages/AddBill';
import AddExpense from './pages/AddExpense';
import Bills from './pages/Bills';
import Expenses from './pages/Expenses';
import Goals from './pages/Goals';
import Home from './pages/Home';
import Login from './pages/Login';
import NetWorth from './pages/NetWorth';
import Settings from './pages/Settings';
import Signup from './pages/Signup';



const App = () => {
  return (
    <React.Fragment>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/account" exact>
          <Account />
        </Route>
        <Route path="/add-bill" exact>
          <AddBill />
        </Route>
        <Route path="/add-expense" exact>
          <AddExpense />
        </Route>
        <Route path="/bills" exact>
          <Bills />
        </Route>
        <Route path="/expenses" exact>
          <Expenses />
        </Route>
        <Route path="/goals" exact>
          <Goals />
        </Route>
        <Route path="/net-worth" exact>
          <NetWorth />
        </Route>
        <Route path="/settings" exact>
          <Settings />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        {/* Add other routes here if needed */}
      </Switch>
    </Router>
    </React.Fragment>
  );
};

export default App;
