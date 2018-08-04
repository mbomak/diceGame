import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Hash.css';

function Hash({className, hash}) {
    return (
        <div className={cn('hash', className)}>
            <div className="hash__title">Hash</div>
            <div className="hash__value">{hash}</div>
        </div>
    );
}

Hash.propTypes = {
    className: PropTypes.string,
    hash: PropTypes.string.isRequired
};

export default Hash;
