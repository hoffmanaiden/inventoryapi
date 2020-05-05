import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import Authform from "../components/Authform";
import { authUser } from "../store/actions/auth";
import {removeError} from "../store/actions/errors";

const Main = props => {
  const {authUser, errors, removeError, currentUser} = props;
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={props => <Homepage currentUser={currentUser} {...props} />} />
        <Route exact path="/signin" render={props => {
          return (
            <Authform errors={errors} removeError={removeError} onAuth={authUser} buttonText="Login" heading="Sign In" {...props} />
          )
        }} />
        <Route exact path="/signup" render={props => {
          return (
            <Authform signUp errors={errors} removeError={removeError} onAuth={authUser} buttonText="Create Account" heading="Sign Up" {...props} />
          )
        }} />
      </Switch>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  }
}

export default withRouter(connect(mapStateToProps, {authUser, removeError})(Main));