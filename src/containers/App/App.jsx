// import modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

// inmport components
import Header from 'components/Header';
import Balance from 'components/Balance';
import Result from 'components/Result';
import Hash from 'components/Hash';
import DiceBoard from 'components/DiceBoard';

//import selectors and actions
import {
  selectors as dataSelectors,
  actions as dataActions,
} from 'modules/data';

// import styles
import './App.css';


class App extends Component {
    render() {
        // take data from props container(reducer -> selectors,actions -> props)
        const {
            balance,
            addFreeCredits
        } = this.props;

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
                            balance={balance}
                            unit="Credits"
                            onAddFreeCredits={addFreeCredits}
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

App.propTypes = {
    //className: PropTypes.string,
    balance: PropTypes.number
};

const mapStateToProps = createStructuredSelector({
    balance: dataSelectors.takeBalance
});

const mapDispatchToProps = {
    addFreeCredits: dataActions.addFreeCredits
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
