import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Balance.css';

function Balance({className, balance, unit, onAddFreeCredits}) {
    // Event functions
    const onAddCredits = () => {
        if (balance === 0) {
            onAddFreeCredits();           
        }
    };

    return (
        <div className={cn('balance', className)}>
            <div className="balance__head">
                <span className="balance__title">Balance:</span>&nbsp;
                <span
                    className={cn(
                        'balance__value',
                        {'balance__value_red': balance === 0}
                    )}
                >
                    {balance}
                </span>&nbsp;
                <span className="balance__unit">{unit}</span>
            </div>
            <button
                className={cn(
                    'balance__btn',
                    {'balance__btn_disable': balance !== 0}
                )}
                type="button"
                onClick={onAddCredits}
            >
                {`Free ${unit}`}
            </button>
        </div>
    );
}

Balance.defaultProps = {
  balance: 0,
  unit: 'credits'
};

Balance.propTypes = {
    className: PropTypes.string,
    balance: PropTypes.number,
    unit: PropTypes.string,
    onAddFreeCredits: PropTypes.func
};

export default Balance;
