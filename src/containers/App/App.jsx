// import modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

// inmport components
import Header from 'components/Header';
import Balance from 'components/Balance';
import Result from 'components/Result';
import Hash from 'components/Hash';
import DiceBoard from 'components/DiceBoard';

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
                    <div className="app__main">
                        <DiceBoard
                            
                        />
                    </div>                   
                    <aside className="app__sidebar">
                        <Balance
                            className="app__sidebar-item"
                            balance={100}
                            unit="Credits"
                        />
                        <Result
                            className="app__sidebar-item"
                            value={64}
                        />
                        <Hash
                            className="app__sidebar-item"
                            hash={'sadadadlaldka;jdjdjadjakdjajd'}
                        />
                    </aside>                   
                </main>
            </div>
        );
    }
}

export default App;
