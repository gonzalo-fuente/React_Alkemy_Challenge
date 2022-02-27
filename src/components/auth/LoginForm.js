import TextField from "../common/TextField";

/* Formik & YUP */
import { Formik, Form } from "formik";
import * as Yup from "yup";

const LoginForm = ({ handleSubmit, isHidden }) => {
  /* Validation Scheme */
  const validate = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be at least 5 charaters long")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {(formik) => (
        <div className={isHidden ? "d-none" : "d-block"}>
          <h1 className="mb-4 font-weight-bold .display-4">User Login</h1>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <div className="d-grid">
              <button className="btn btn-info mt-3" type="submit">
                Log in
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
