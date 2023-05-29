import { Formik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";

const phoneRegExp = /^\+?[1-9]\d{1,14}$/;

const deliverySchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string(),
  phoneNo: yup
    .string()
    .matches(phoneRegExp, "Invalid phone number")
    .required("required"),
  phoneNo: yup.string().required("required"),
  address: yup.string().required("required"),
});

let initialValues = {
  firstName: "",
  lastName: "",
  phoneNo: "",
  address: "",
};

const DeliveryAddress = () => {
  const user = useSelector((state) => state.user);
  initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNo: user.password,
    address: user.address,
  };

  const handleFormSubmit = async (values, onSubmitProps) => {};

  return (
    <div className="delivery-address">
      <div className="delivery-header">Delivery Address</div>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={deliverySchema}
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
            <div className="flex margin-b2">
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

            <div className="flex margin-b2">
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

            <div className="margin-b2">
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
            <div className="flex margin-b2">
              <div className="margin-r">
                <Button
                  fullWidth
                  type="submit"
                  sx={{
                    marginTop: "14%",
                    padding: "0.8rem",
                    backgroundColor: "#ff9408",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#ffdfb6",
                      color: "#000",
                    },
                  }}
                >
                  Change Permenantly
                </Button>
              </div>
              <div className="margin-r margin-r2">
                <Button
                  fullWidth
                  type="submit"
                  sx={{
                    marginTop: "14%",
                    padding: "0.8rem",
                    backgroundColor: "#ff9408",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#ffdfb6",
                      color: "#000",
                    },
                  }}
                >
                  Change Temporarily
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default DeliveryAddress;
