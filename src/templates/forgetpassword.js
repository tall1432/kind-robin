import React from "react";
import { Layout } from "../components/index";

import { FaEnvelope } from "react-icons/fa";
import Loader from "react-loader-spinner";
import { FaCheck, FaTimes } from "react-icons/fa";

import "../sass/custom.scss";

export default class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: "",
    };
  }
  conditionalButton = () => {
    let { buttonState } = this.state;
    if (buttonState === "loading") {
      return <Loader type="Oval" color="#fff" />;
    }
    if (buttonState === "success") {
      return <FaCheck />;
    }
    if (buttonState === "error") {
      return <FaTimes />;
    } else {
      return "generate link";
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      buttonState: "loading",
    });
    setTimeout(() => this.setState({ buttonState: "success" }), 2000);
    setTimeout(() => this.setState({ buttonState: "" }), 4000);
  };

  render() {
    const { buttonState } = this.state;
    return (
      <Layout {...this.props}>
        <section className="custom-container">
          <div className="custom-container__left">
            <div className="content">
              <h2>Hello</h2>
              <p>Enter your email to receive reset link.</p>
            </div>
          </div>
          <div className="custom-container__right">
            <div className="content">
              <h3 className="title">Forget Password?</h3>
              <form
                name="forgetPasswordForm"
                method="POST"
                className="forget-password-form"
                onSubmit={this.handleSubmit}
              >
                <div className="form-row">
                  <label>
                    <span className="screen-reader-text">Email</span>
                  </label>
                  <div className="input_container">
                    <FaEnvelope />
                    <input
                      className="email"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                </div>

                <button
                  className={`${
                    buttonState && `btn-${buttonState}`
                  } button secondary btn-submit submit-btn`}
                  type="submit"
                >
                  {this.conditionalButton()}
                </button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
