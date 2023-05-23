
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
const loginSchema = Yup.object(
  {
    email:Yup.string().email().required(``),
    password:Yup.string().required()
  }
)
const UserForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(value) => {
          console.log(value.email);
        }}
      >{()=>{
        return(
          <Form>
           <div> <Field placeholder='Email' type='email' name= "email"/></div>
           <div></div>
            <div><Field type="password" name="password" placeholder="password"/></div>
            <div><button type= "submit">Click</button></div>
          </Form>
        )
      }}</Formik>
    </>
  );
};

export default UserForm;
