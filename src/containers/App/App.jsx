// import modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

// inmport components
import Header from 'components/Header';
import Balance from 'components/Balance';

// import styles
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="app">
                <Header
                    title="Welcome to our game!"
                />
                <main className="app__content">
                    <div className="app__main">2</div>                   
                    <aside className="app__sidebar">
                        <Balance
                            balance={100}
                            unit="Credits"
                        />
                    </aside>                   
                </main>
            </div>
        );
    }
}

export default App;
