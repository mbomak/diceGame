import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';
// import cn from 'classnames';

import './Nav.css';

class Nav extends PureComponent {
    render() {
        const {
            items
        } = this.props;

        return (
            <nav className="nav">
                {items &&
                    items.map((item) => <a className="nav__link" key={item.id} href="javascript:;">{item.title}</a>)   
                }
            </nav>
        );
    }
}

{/*Test.defaultProps = {
  toggleState() {}
};*/}

// Test.propTypes = {
//     data: PropTypes.string
// };

export default Nav;
