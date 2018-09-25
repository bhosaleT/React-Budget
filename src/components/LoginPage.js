import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLoginWithGoogle, startLoginWithGithub } from "../actions/auth";

export const LoginPage = ({ startLoginWithGoogle, startLoginWithGithub }) => (
  <div>
    <h1>Login</h1>
    <button onClick={startLoginWithGoogle}>Login with google</button>
    <button onClick={startLoginWithGithub}>Login with Github</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
  startLoginWithGithub: () => dispatch(startLoginWithGithub())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
