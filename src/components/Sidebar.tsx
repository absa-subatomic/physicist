import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';

import logo from '../assets/img/logo-white.svg';

class Sidebar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.activeRoute.bind(this);
  }

  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName: string) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  }

  getSidebar() {
    return 'sidebar';
  }

  render() {
    return (
      <div className="sidebar" data-color="red">
        <div className="logo">
          <a href="/" className="simple-text logo-mini">
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>
          <a href="/" className="simple-text logo-normal">
            Physicist
          </a>
        </div>
        <div className="sidebar-wrapper" ref={this.getSidebar()}>
          <Nav>
            {this.props.routes.map((prop, key) => {
              if (prop.redirect) {
                return null;
              }
              return (
                <li
                  className={
                    this.activeRoute(prop.path) +
                    (prop.pro ? ' active active-pro' : '')
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={'fas ' + prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
