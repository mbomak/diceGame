import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectors as menuSelectors,
  actions as menuActions,
} from 'modules/menu';

import Nav from 'components/Nav';

import './Header.css';


class Header extends PureComponent {
    constructor(props) {
      super(props);
      this.onAdd = this.onAdd.bind(this);
    }

    onAdd() {
        let id = (new Date()).getTime();
        this.props.addMenu(id, this.input.value);
        this.input.value = '';
    }

    render() {
        const {
            menu,
            titles
        } = this.props;

        return (
            <div className="header">
                <Nav items={menu.menu}/>
                <input ref={field => this.input = field} />
                <button type="button" onClick={this.onAdd}>add menu</button>
                {titles &&
                    titles.map((item,index) => <p key={index}>{item}</p>)
                }
            </div>
        );
    }
}

// function getSate(state) {
//     return state;
// } 

// function dispatch(dispatch) {
//     return {
//         addMenu: (id, title) => dispatch({type: 'ADD_MENU_ITEM', payload: {id, title}})
//     };
// }

const mapStateToProps = createStructuredSelector({
  menu: menuSelectors.selectMenu,
  titles: menuSelectors.selectTitles,
});

const mapDispatchToProps = {
  addMenu: menuActions.addMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
