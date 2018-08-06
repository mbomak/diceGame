import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import sha256 from 'sha-256-js';

import './DiceBoard.css';

// Function to ban all key except number
const toEnterOnlyNumber = (e, code) => {
    if (
        (code >= 48 && code <= 57) ||
        (code >= 96 && code <= 105) ||
        code === 37 ||
        code === 39
        ) { 

        return;
    }

    e.preventDefault();
}

// Function to nice round of number
Number.prototype.niceNumber = function() {
    if (isNaN(this)) {
        return 0;
    }

    if ((this - Math.floor(this)) > 0) {
        return this.toFixed(2)        
    }
    
    return this.toFixed(0);  
};

// Function to generate nuber betwen 0-100
const generateNumber = () => {
     return Math.floor(Math.random()*101);
}


class DiceBoard extends PureComponent {
    constructor(props) {
        super(props);

        // set state param
        this.state = {
            valueBetAmount: this.props.betAmount,
            number: this.props.number,
            errBetAmount: false,
            errNumber: false
        };
    }

    // callback change bet amount field
    handleChangeBetAmount = (e) => {
        let value = e.target.value,
            balance = this.props.balance;

        // if bet amount more then balance
        if (+value > balance) {
            this.setState({
                valueBetAmount: balance,
                errBetAmount: true
            });

            this.props.onChangeBetAmount(+balance);

            return;
        }

        this.setState({
            valueBetAmount: value,
            errBetAmount: false
        });

        this.props.onChangeBetAmount(+value);
    };

    // callback change namber field
    handleChangeNumber = (e) => {
        let value = e.target.value;

        // if number more then 99
        if (+value > 99) {
            this.setState({
                number: 99,
                errNumber: true
            });

            this.props.onChangeBetNumber(99);

            return;
        }

        this.setState({
            number: value,
            errNumber: false
        });

        this.props.onChangeNumber(+value);
    };

    // delete error after onblur field
    handleBlur = () => {
        this.setState({
            errNumber: false,
            errBetAmount: false
        });        
    }

    // to disable key press except number on bet amount field
    handleKeyEventBet = (e) => {
        let code = e.keyCode;

        if (code === 8 || code === 46) {
            this.setState({
                valueBetAmount: ''
            });
        }

        toEnterOnlyNumber(e, code);
    }

    // to disable key press except number on number field
    handleKeyEventNumber = (e) => {
        let code = e.keyCode;

        if (code === 8 || code === 46) {
            this.setState({
                number: ''
            });
        }

        toEnterOnlyNumber(e, code);
    }

    // handleClick function call result
    handleClick = (index) => {
        let {
            number,
            balance,
            betAmount,
            onChangeOldResult,
            oldResult,
            result,
            onChangeBalance,
            onChangeStatusWin,
            onAddNewHash,
            onChangeResult
        } = this.props;

        const newNumber = generateNumber(),
              newHash = sha256(newNumber.toString());
        let payout,
            increaseBalance,
            reduceBalance;

        // calculate payout
        if (index === 'hi') {
           payout = (100/(100 - number)).niceNumber();
        } else if (index === 'lo') {
            payout = (100/this.state.number).niceNumber();   
        }
        increaseBalance = balance + betAmount*payout;
        reduceBalance = balance - betAmount;
        increaseBalance = increaseBalance.toFixed(0);
        reduceBalance = reduceBalance.toFixed(0);


        // balance must be > 0 || 0
        if (reduceBalance < 0) {
            reduceBalance = 0;   
        }
        

        
        // if bet Hi
        if (index === 'hi' && (result >= number)) {console.log('win');
            onChangeBalance(increaseBalance);
            onChangeStatusWin(true);
        } else if (index === 'hi') {console.log('loce');
            onChangeBalance(reduceBalance);
            onChangeStatusWin(false);
        }

        // if bet Lo
        if (index === 'lo' && (result <= number)) {
            onChangeBalance(increaseBalance);
            onChangeStatusWin(true);
        } else if (index === 'lo') {
            onChangeBalance(reduceBalance);
            onChangeStatusWin(false);
        }

        // add new hash and result
        onChangeOldResult(result); 
        onAddNewHash(newHash);
        onChangeResult(newNumber);
    }

    // write data in local storage when component was reneder
    componentDidUpdate() {
        this.props.onWriteStore();
    }

    render() {
        const {
            className,
            balance        
        } = this.props;

        return (
            <div className={cn('dice-board', className)}>
                <div className="dice-board__field">
                    <label htmlFor="bet-amount">Bet amount</label>  
                    <input
                        id="bet-amount"
                        type="text"
                        placeholder="Enter your bet amount..."
                        value={this.state.valueBetAmount}
                        onChange={this.handleChangeBetAmount}
                        onBlur={this.handleBlur}
                        onKeyDown={this.handleKeyEventBet}
                    />
                    <div
                        className={cn(
                            'dice-board__field-err',
                            {'dice-board__field-err_visible': this.state.errBetAmount}
                        )}
                    >
                        Sorry, but your bet amont must not be more then balance!
                    </div> 
                </div>
                <div className="dice-board__field">
                    <label htmlFor="number">Number</label>  
                    <input
                        id="number"
                        type="text"
                        placeholder="Enter your number..."
                        value={this.state.number}
                        onChange={this.handleChangeNumber}
                        onBlur={this.handleBlur}
                        onKeyDown={this.handleKeyEventNumber}
                    />
                    <div
                        className={cn(
                            'dice-board__field-err',
                            {'dice-board__field-err_visible': this.state.errNumber}
                        )}
                    >
                        Sorry, but your number must not be more then 100!
                    </div>  
                </div>
                <div className="dice-board__wrapp">
                    <div className="dice-board__bet">
                        <button
                            className={cn(
                                'dice-board__btn',
                                {
                                    'dice-board__btn_disable':  this.state.valueBetAmount === '' ||
                                                                this.state.number === '' ||
                                                                balance < 1
                                }
                            )}
                            type="button"
                            onClick={() => this.handleClick('hi')}
                        >
                            Bet Hi
                        </button>
                        <div className="dice-board__bet-index">number >= {this.state.number}</div>
                        <div className="dice-board__bet-index">
                            chance: {
                                this.state.number !== ''? 100 - this.state.number: 0
                            }%
                        </div>
                        <div className="dice-board__bet-index">
                            payout: {
                                this.state.number !== ''? (100/(100 - this.state.number)).niceNumber(): 0
                            }x
                        </div>
                    </div>
                    <div className="dice-board__bet">
                        <button
                            className={cn(
                                'dice-board__btn',
                                {
                                    'dice-board__btn_disable':  this.state.valueBetAmount === '' ||
                                                                this.state.number === '' ||
                                                                balance < 1
                                }
                            )}
                            type="button"
                            onClick={() => this.handleClick('lo')}
                        >
                            Bet Lo
                        </button>
                        <div className="dice-board__bet-index">{`number <= ${this.state.number}`}</div>
                        <div className="dice-board__bet-index">
                            chance: {
                                this.state.number !== ''? this.state.number: 0
                            }%
                        </div>
                        <div className="dice-board__bet-index">
                            payout: {
                                this.state.number !== ''? (100/this.state.number).niceNumber(): 0
                            }x
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

DiceBoard.propTypes = {
    className: PropTypes.string,
    balance: PropTypes.number,
    betAmount: PropTypes.number,
    number: PropTypes.number,
};

export default DiceBoard;
