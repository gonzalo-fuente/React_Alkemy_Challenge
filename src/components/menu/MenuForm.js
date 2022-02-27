import TextField from "../common/TextField";

/* Formik & YUP */
import { Formik, Form } from "formik";
import * as Yup from "yup";

const MenuForm = ({ handleSubmit }) => {
  /* Validation Scheme */
  const validate = Yup.object({
    text: Yup.string()
      .min(2, "Menu Item must be at least 2 charaters long")
      .required("You must write at least 2 characters"),
  });

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {(formik) => (
        <div>
          <h1 className="fs-1 fst-italic mb-3">Menu Item Search</h1>
          <Form>
            <TextField label="Search for a Menu Item" name="text" type="text" />
            <div className="d-grid">
              <button className="btn btn-info mt-3" type="submit">
                Search
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default MenuForm;
