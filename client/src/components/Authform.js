import React, { Component } from "react";

export default class Authform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isAdmin: false
    };
  }

  handleChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props.onAuth(authType, this.state)
      .then(() => {
        this.props.history.push("/")
      }).catch(() => {
        return;
      })
  }

  render() {
    const { username, password, isAdmin } = this.state;
    const {heading, buttonText, signUp, errors, history, removeError} = this.props;

    history.listen(() => {
      removeError();
    })

    return (
      <div className="signin-signup">
        <form onSubmit={this.handleSubmit}>
          <p>{heading}</p>
          {errors.message && (
            <div className="errorMessage">{errors.message}</div>
          )}
          <input type="text" placeholder="username" name="username" onChange={this.handleChange} value={username}/>
          <input type="password" placeholder="password" name="password" onChange={this.handleChange} />
          {signUp && (
             <input type="password" placeholder="confirm password" name="confirmPassword" onChange={this.handleChange} />
          )}
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    );
  }
}