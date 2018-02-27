import React, { Component } from 'react';
import './App.css';
import ItemList from './components/ItemList'

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>YN Thunks EX</p>
          <p><a href='https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3'>A Dummy’s Guide to Redux and Thunk in React</a></p>
          <ItemList />
      </div>
    );
  }
}

export default App;
