import React from "react";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { toastMessage } from "../../../utils/helper.utils";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "minimum 8 character require")
    .matches(/[a-z]/, "At least 1 lower case letter require")
    .matches(/[A-Z]/, "At least 1 upper case letter require")
    .matches(/[0-9]/, "At least 1 number require")
    .required("Required"),
});

const SignIn = () => {
  return (
    <Formik
      initialValues={{
        password: "",
        email: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        console.log(values);
        toastMessage(
          "Login Successful. Open console to see the values",
          "login_success",
          "success"
        );
      }}
    >
      {({ touched, errors, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <Field
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="abc@example.com"
            />
            {touched.email && errors.email && (
              <div
                className="text-danger position-absolute"
                style={{ fontSize: "10px" }}
              >
                <ErrorMessage name="email" />
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Field
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
            {touched.password && errors.password && (
              <div
                className="text-danger position-absolute"
                style={{ fontSize: "10px" }}
              >
                <ErrorMessage name="password" />
              </div>
            )}
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-success w-100">
              Log In
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default SignIn;
