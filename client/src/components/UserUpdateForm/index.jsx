import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  USER_REGISTRATION_SCHEMA,
  USER_UPDATE_SCHEMA,
} from "../../validation/userValidation";
import { UserContext } from "../../contexts";
import { useContext } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordRepeat: "",
  gender: "",
  // imageSrc: "",
};

const UserUpdateForm = () => {
  const [user, setUser] = useContext(UserContext);

  const handleSubmit = (values, formikBag) => {
    const userUpdatedFields = {};

    Object.entries(values).forEach(([key, value]) => {
      if (value !== "" && key !== "gender") {
        userUpdatedFields[key] = value;
      } else if (value !== "" && key === "gender") {
        userUpdatedFields.isMale = value === "male";
      }
    });

    setUser({
      ...user,
      ...userUpdatedFields,
    });

    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_UPDATE_SCHEMA}
    >
      <Form>
        <div>
          <Field
            name="firstName"
            type="text"
            id="firstName"
            placeholder="First name"
          />
          <ErrorMessage name="firstName" />
        </div>
        <div>
          <Field
            name="lastName"
            type="text"
            id="lastName"
            placeholder="Last name"
          />
          <ErrorMessage name="lastName" />
        </div>
        <div>
          <Field name="email" type="email" id="email" placeholder="Email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <Field
            name="password"
            type="password"
            id="password"
            placeholder="Password"
          />
          <ErrorMessage name="password" />
        </div>
        <div>
          <Field
            name="passwordRepeat"
            type="password"
            id="passwordRepeat"
            placeholder="Repeat password"
          />
        </div>

        <fieldset>
          <legend>Gender</legend>
          <div>
            <Field type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
          </div>

          <div>
            <Field type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
            <ErrorMessage name="gender" />
          </div>
        </fieldset>

        <div>
          <button type="submit">Register</button>
          <button type="reset">Reset fields</button>
        </div>
      </Form>
    </Formik>
  );
};

export default UserUpdateForm;
