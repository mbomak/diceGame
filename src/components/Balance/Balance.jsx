import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Balance.css';

function Balance({className, balance, unit}) {
    return (
        <div className={cn('balance', className)}>
            <div className="balance__head">
                <span className="balance__title">Balance:</span>&nbsp;
                <span className="balance__value">{balance}</span>&nbsp;
                <span className="balance__unit">{unit}</span>
            </div>
            <button className="balance__btn" type="button">{`Free ${unit}`}</button>
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
    unit: PropTypes.string
};

export default Balance;
