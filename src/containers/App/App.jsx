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
    constructor(props) {
      super(props);
    }

    // to write local store
    onWriteStore = () => {
        const {
            balance,
            betAmount,
            number
        } = this.props;

        const dataObj = JSON.stringify({
            balance,
            betAmount,
            number    
        });

        localStorage.setItem('diceGame', dataObj);
    }

    render() {
        // take data from props container(reducer -> selectors,actions -> props)
        const {
            balance,
            winStatus,
            betAmount,
            number,
            addFreeCredits,
            changeBetAmount,
            changeNumber,
            changeResult,
            changeOldResult,
            changeStatusWin,
            changeBalance,
            hash,
            oldResult,
            result,
            addNewHash
        } = this.props;

        return (
            <div className="app">
                <Header
                    title="Welcome to our game!"
                />
                <main className="app__content">
                    <div className="app__main">
                        <DiceBoard
                            balance={balance}
                            betAmount={betAmount}
                            number={number}
                            oldResult={oldResult}
                            result={result}
                            onChangeBetAmount={changeBetAmount}
                            onChangeNumber={changeNumber}
                            onChangeResult={changeResult}
                            onChangeStatusWin={changeStatusWin}
                            onChangeBalance={changeBalance}
                            onWriteStore={this.onWriteStore}
                            onAddNewHash={addNewHash}
                            onChangeOldResult={changeOldResult}
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
                            result={oldResult}
                            winStatus={winStatus}
                        />
                        <Hash
                            className="app__sidebar-item"
                            hash={hash}
                        />
                    </aside>                   
                </main>
            </div>
        );
    }
}

App.propTypes = {
    balance: PropTypes.number,
    betAmount: PropTypes.number,
    number: PropTypes.number,
    hash: PropTypes.string,
    result: PropTypes.number,
    addFreeCredits: PropTypes.func,
    changeBetAmount: PropTypes.func,
    changeNumber: PropTypes.func,
    changeResult: PropTypes.func,
    changeOldResult: PropTypes.func,
    changeStatusWin: PropTypes.func,
    changeBalance: PropTypes.func,
    onWriteStore: PropTypes.func,
    addNewHash: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
    balance: dataSelectors.takeBalance,
    result: dataSelectors.takeResult,
    betAmount: dataSelectors.takeBetAmount,
    number: dataSelectors.takeNumber,
    winStatus: dataSelectors.takeWinStatus,
    hash: dataSelectors.takeHash,
    oldResult: dataSelectors.takeOldResult
});

const mapDispatchToProps = {
    addFreeCredits: dataActions.addFreeCredits,
    changeBetAmount: dataActions.changeBetAmount,
    changeNumber: dataActions.changeNumber,
    changeResult: dataActions.changeResult,
    changeOldResult: dataActions.changeOldResult,
    changeStatusWin: dataActions.changeStatusWin,
    changeBalance: dataActions.changeBalance,
    addNewHash: dataActions.addNewHash,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
