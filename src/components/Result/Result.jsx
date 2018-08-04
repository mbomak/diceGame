import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Result.css';

function Result({className, result, winStatus}) {
    return (
        <div className={cn('result', className)}>
            <div className="result__title">Result</div>
            <div className="result__value">
                <span
                    className={cn(
                        {'result__value_win': winStatus},
                        {'result__value_lose': !winStatus}
                    )}>
                    {result}
                </span>
                {(winStatus !== 'start' && winStatus) && 'win!'}
                {(winStatus !== 'start' && !winStatus) && 'lose!'}
            </div>
        </div>
    );
}

Result.propTypes = {
    className: PropTypes.string
};

export default Result;
