import { TextField, Button } from "@mui/material";
// import Dropzone from "react-dropzone";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setModal } from "../state";

const phoneRegExp = /^\+?[1-9]\d{1,14}$/;

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string(),
  phoneNo: yup
    .string()
    .matches(phoneRegExp, "Invalid phone number")
    .required("required"),
  phoneNo: yup.string().required("required"),
  password: yup.string().required("required"),
  address: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  phoneNo: yup.string().required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  phoneNo: "",
  password: "",
  address: "",
};

const initialValuesLogin = {
  phoneNo: "",
  password: "",
};

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const SERVER_URL = useSelector((state) => state.url);
  let isLogin = true;

  const register = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    // formData.append("picturePath", values.picture.name);
    console.log(formData);

    const savedUserResponse = await fetch(
      `${SERVER_URL}/auth/register`,
      {
        method: "POST",
        body: formData,
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    // if (savedUser) {
    //   console.log("saved successfully");
    //   console.log(savedUser);
    // }
  };

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch(`${SERVER_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn.user) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      dispatch(setModal({ isModalOpen: false }));
      navigate("/store");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    isLogin
      ? await login(values, onSubmitProps)
      : await register(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {({
        handleSubmit,
        setFieldValue,
        resetForm,
        values,
        handleChange,
        handleBlur,
        errors,
        touched,
      }) => (
        <form onSubmit={handleSubmit} className="register-form">
          {isLogin ? (
            <>
              <div className="margin-b">
                <TextField
                  label="Phone Number"
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phoneNo}
                  name="phoneNo"
                  error={Boolean(touched.phoneNo) && Boolean(errors.phoneNo)}
                  helperText={touched.phoneNo && errors.phoneNo}
                />
              </div>

              <div className="margin-b">
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={Boolean(touched.password) && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex margin-b">
                <div className="margin-r">
                  <TextField
                    label="First Name"
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    error={
                      Boolean(touched.firstName) && Boolean(errors.firstName)
                    }
                    helperText={touched.firstName && errors.firstName}
                  />
                </div>
                <TextField
                  label="Last Name"
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </div>

              <div className="flex margin-b">
                <div className="margin-r">
                  <TextField
                    label="Phone Number"
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phoneNo}
                    name="phoneNo"
                    error={Boolean(touched.phoneNo) && Boolean(errors.phoneNo)}
                    helperText={touched.phoneNo && errors.phoneNo}
                  />
                </div>
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={Boolean(touched.password) && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </div>

              <div className="margin-b">
                <TextField
                  label="Address"
                  fullWidth
                  multiline
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
                  name="address"
                  error={Boolean(touched.address) && Boolean(errors.address)}
                  helperText={touched.address && errors.address}
                />
              </div>
            </>
          )}
          <div className="margin-b">
            <Button
              fullWidth
              type="submit"
              sx={{
                marginTop: "2rem",
                padding: "0.8rem",
                backgroundColor: "#ff9408",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#ffdfb6",
                  color: "#000",
                },
              }}
            >
              {isLogin ? "Login" : "Register"}
            </Button>
          </div>

          <div
            className="margin-b reg-link"
            onClick={() => {
              isLogin = !isLogin;
              resetForm();
            }}
          >
            {isLogin
              ? "Don't have an account? Sign Up here"
              : "Already have an account? Login here."}
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;
