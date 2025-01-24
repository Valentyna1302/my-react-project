import { Field, Form, Formik } from "formik";
import s from "./FeedbackForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

// required - Властивість обов'язкова для заповнення
const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string()
    .min(3, "Too short")
    .max(256, "Too long")
    .required("Required"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
});

const initialValues = {
  username: "",
  email: "",
  message: "",
  level: "good",
  agree: false,
};

const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values); //об'єкт значень полів форми в момент її відправки.
    actions.resetForm(); // actions - об'єкт з допоміжними методами. Наприклад, метод resetForm використовується для очищення полів форми після відправки.
  };

  return (
    <section className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        {({ values }) => (
          <Form className={s.form}>
            <div className={s.labelWraper}>
              <label htmlFor={nameFieldId}>Username</label>
              <Field
                className={s.input}
                type="text"
                name="username"
                id={nameFieldId}
              />
              <ErrorMessage
                className={s.span}
                name="username"
                component="span"
              />
            </div>

            <div className={s.labelWraper}>
              <label htmlFor={emailFieldId}>Email</label>
              <Field
                className={s.input}
                type="email"
                name="email"
                id={emailFieldId}
              />
              <ErrorMessage className={s.span} name="email" component="span" />
            </div>

            <div className={s.labelWraper}>
              <label htmlFor={msgFieldId}>Message</label>
              <Field
                className={s.input}
                as="textarea"
                name="message"
                id={msgFieldId}
                rows="5"
              />
              <ErrorMessage
                className={s.span}
                name="message"
                component="span"
              />
            </div>

            <div className={s.labelWraper}>
              <label htmlFor={levelFieldId}>Service satisfaction level</label>
              <Field
                className={s.input}
                as="select"
                name="level"
                id={levelFieldId}
              >
                <option value="good">Good</option>
                <option value="neutral">Neutral</option>
                <option value="bad">Bad</option>
              </Field>
              <ErrorMessage className={s.span} name="level" component="span" />
            </div>

            <label>
              <Field type="checkbox" name="agree" />I accept all terms of use
            </label>

            <button disabled={!values.agree} className={s.button} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default FeedbackForm;
