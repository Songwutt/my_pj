import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavLink from './NavLink';
import MemberList from './MemberList'
import Table from './Table'
import About from './About'
import fire from '../firebase/config'
import test from '../components/test'
class Home extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }


  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <Router>
        <form>
          <div className="">
            <NavLink />
            <Switch>

              <Route path="/Table" exact component={Table} />
              <Route path="/About" exact component={About} />
            </Switch>
            <MemberList />

            <botton onClick={this.logout} style={{ marginLeft: '10px' }} class="btn btn-danger" >Logout</botton>
          </div>
        </form>
      </Router>
    );
  }

}

export default Home;