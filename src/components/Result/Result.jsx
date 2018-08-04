import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Result.css';

function Result({className, value}) {
    return (
        <div className={cn('result', className)}>
            <div className="result__title">Result</div>
            <div className="result__value">
                <span>{value}</span> win!
            </div>
        </div>
    );
}

Result.defaultProps = {
  value: 0,
};

Result.propTypes = {
    className: PropTypes.string,
    value: PropTypes.number
};

export default Result;
