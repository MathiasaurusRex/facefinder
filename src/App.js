import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import EmployeeDirectory from './components/EmployeeDirectory';


import Faces from './data/Faces';

class App extends Component {

  constructor(){
    super()
    this.state = {
      search: ''
    }

    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
      this.setState({search: event.target.value})
  }
  
  render() {

    let filteredFace = Faces.filter(
      (item) => {
            return ( 
              item.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                || item.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                || item.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                || item.manager.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                || item.projects.join().toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            );
        }
    );
    return (
      // Commit test
      <Router>
        <div className="App">
          <header>
            <a href="/">
              FaceFinder!
            </a>
            <div>
              <label htmlFor="search">Search</label>
              <input id="search" type="text" onChange={this.updateSearch}/>
            </div>
          </header>
          <Switch>
            
            <Route exact path='/' render={() => (
                <EmployeeDirectory faces={filteredFace}/>
            )}/>

            

            {/* TODO
            EmployeePage */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
