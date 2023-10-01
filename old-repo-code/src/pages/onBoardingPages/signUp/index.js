import React from "react";
import "./signUp.scss";

const SignUp = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css"
        rel="stylesheet"
      />

      <div className="testbox">
        <h1>Registration</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="signup-form"
        >
          <hr />
          <div className="accounttype">
            <input type="radio" id="radioOne" name="account" checked />
            <label htmlFor="radioOne" className="radio" chec>
              Personal
            </label>
            <input type="radio" id="radioTwo" name="account" />
            <label htmlFor="radioTwo" className="radio">
              Company
            </label>
          </div>
          <hr />
          <label id="icon" htmlFor="name">
            <i className="icon-envelope "></i>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Email"
            required
          />
          <label id="icon" htmlFor="name">
            <i className="icon-user"></i>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <label id="icon" htmlFor="name">
            <i className="icon-shield"></i>
          </label>
          <input
            type="password"
            name="name"
            id="name"
            placeholder="Password"
            required
          />
          <div className="gender">
            <input type="radio" value="None" id="male" name="gender" checked />
            <label htmlFor="male" className="radio" chec>
              Male
            </label>
            <input type="radio" value="None" id="female" name="gender" />
            <label htmlFor="female" className="radio">
              Female
            </label>
          </div>
          <p>
            By clicking Register, you agree on our{" "}
            <a href={window.location.pathname}>terms and condition</a>.
          </p>
          <a className="button" href={window.location.pathname}>
            Register
          </a>
        </form>
      </div>
    </>
  );
};

export default SignUp;
