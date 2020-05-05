import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {logout} from "../store/actions/auth";

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    return (
      <div className="navbar">
        <Link to="/" className="navbar-home">Equipment</Link>
        {this.props.currentUser.isAuthenticated ? (
          <ul className="navbar-right">
            <li className="navbar-link">
              <a onClick={this.logout}>Logout</a>
            </li>
            <li className="navbar-link">
              +add equipment
            </li>
            <li className="navbar-link">
              <Link to="/userlist" className="navbar-userlist" id="navbar-userlist">User List</Link>
            </li>
          </ul>
        ) : (
            <ul className="navbar-right">
              <li className="navbar-link">
                <Link to="/signup" className="navbar-signup" id="navbar-signup">Signup</Link>
              </li>
              <li className="navbar-link">
                <Link to="/signin" className="navbar-signin" id="navbar-signin">Sign-in</Link>
              </li>
            </ul>
          )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}
export default connect(mapStateToProps, {logout})(Navbar);