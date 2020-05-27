import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const tabs = [{
  route: "/home",
  icon: faHome,
  label: "Home"
},{
  route: "/search",
  icon: faSearch,
  label: "Search"
},{
  route: "/login",
  icon: faUserCircle,
  label: "Login"
}]

const Navigation = (props) => {

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top" role="navigation">
        <div className="container-fluid">
            <a className="navbar-brand" href="/home">Brand</a>
            <Nav className="ml-auto">
              <NavItem>
                <NavLink to="/search" className="nav-link">
                  Search
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </NavItem>
            </Nav>
        </div>
      </nav>
    <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
      <Nav className="w-100">
        <div className=" d-flex flex-row justify-content-around w-100">
          {
            tabs.map((tab, index) =>(
              <NavItem key={`tab-${index}`}>
                <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={tab.icon}/>
                    <div className="bottom-tab-label">{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))
          }
        </div>
      </Nav>
    </nav>
    </div>
  )
};

export default Navigation;
