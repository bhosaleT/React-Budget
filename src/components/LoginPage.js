import React from "react";
import { connect } from "react-redux";
import { startLoginWithGoogle, startLoginWithGithub } from "../actions/auth";

export const LoginPage = ({ startLoginWithGoogle, startLoginWithGithub }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Pocket Money</h1>
      <p className="box-layout__paragraph">Start saving today! A rupee at a time.</p>
      <button className="button" onClick={startLoginWithGoogle}>
        Sign in with <span style={{ color: "red" }}>Google</span>
      </button>
      <button className="button" onClick={startLoginWithGithub}>
        Sign in with <span style={{ color: "#838383" }}>Github</span>
      </button>
    </div>
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
