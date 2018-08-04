import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './DiceBoard.css';


function DiceBoard({className,}) {
    return (
        <div className={cn('dice-board', className)}>
            <div className="dice-board__field">
                <label htmlFor="best-amount">Best amount</label>  
                <input id="best-amount" type="text" /> 
            </div>
            <div className="dice-board__field">
                <label htmlFor="number">Number</label>  
                <input id="number" type="text" /> 
            </div>
            <div className="dice-board__wrapp">
                <div className="dice-board__bet">
                    <button className="dice-board__btn" type="button">Bet Hi</button>
                    <div className="dice-board__bet-index">number >= {25}</div>
                    <div className="dice-board__bet-index">chance: {75}%</div>
                    <div className="dice-board__bet-index">payout: {1.33}x</div>
                </div>
                <div className="dice-board__bet">
                    <button className="dice-board__btn" type="button">Bet Lo</button>
                    <div className="dice-board__bet-index">{`number <= ${25}`}</div>
                    <div className="dice-board__bet-index">chance: {25}%</div>
                    <div className="dice-board__bet-index">payout: {4}x</div>
                </div>
            </div>
        </div>
    );
}

DiceBoard.propTypes = {
    className: PropTypes.string,
    //hash: PropTypes.string.isRequired
};

export default DiceBoard;
