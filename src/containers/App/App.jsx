import React, { Component } from 'react';
//import { connect } from 'react-redux';

import Header from 'components/Header';

import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header
                    title="Welcome to our game!"
                />
                <main>main</main>
            </div>
        );
    }
}

export default App;
