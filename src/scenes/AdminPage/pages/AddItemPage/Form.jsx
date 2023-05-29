import { TextField, Box, Button } from "@mui/material";
import Dropzone from "react-dropzone";
import { Formik } from "formik";
import { useSelector } from "react-redux";

const initialValues = {
  name: "",
  description: "",
  price: "",
  stock: "",
  picture: "",
};

const Form = () => {
  const SERVER_URL = useSelector((state) => state.url);
  
  const handleFormSubmit = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);
    console.log(formData);

    const savedProductResponse = await fetch(`${SERVER_URL}/products`, {
      method: "POST",
      body: formData,
    });
    const savedProduct = await savedProductResponse.json();
    onSubmitProps.resetForm();
  };

  return (
    <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
      {({
        handleSubmit,
        setFieldValue,
        resetForm,
        values,
        handleChange,
        handleBlur,
      }) => (
        <form onSubmit={handleSubmit} className="admin-add-form">
          <div className="margin-b">
            <TextField
              label="Product Name"
              fullWidth
              onBlur={handleBlur}
              onChange={handleChange}
              name="name"
            />
          </div>

          <div className="margin-b">
            <TextField
              label="Product Description"
              fullWidth
              multiline
              onBlur={handleBlur}
              onChange={handleChange}
              name="description"
            />
          </div>

          <div className="flex margin-b">
            <div className="margin-r">
              <TextField
                label="Product Price"
                fullWidth
                onBlur={handleBlur}
                onChange={handleChange}
                name="price"
              />
            </div>
            <TextField
              label="Stock"
              fullWidth
              onBlur={handleBlur}
              onChange={handleChange}
              name="stock"
            />
          </div>

          <div className="margin-b">
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              onDrop={(acceptedFiles) =>
                setFieldValue("picture", acceptedFiles[0])
              }
            >
              {({ getRootProps, getInputProps }) => (
                <Box
                  {...getRootProps()}
                  border={`2px dashed gray`}
                  p="1rem"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!values.picture ? (
                    <p>Add Picture Here</p>
                  ) : (
                    <div>{values.picture.name}</div>
                  )}
                </Box>
              )}
            </Dropzone>
          </div>
          <div className="margin-b">
            {/* <button type="submit" className="form-btn">
              Submit
            </button> */}
            <Button
              fullWidth
              type="submit"
              sx={{
                marginTop: "2rem",
                padding: "0.8rem",
                backgroundColor: "#ffdfb6",
                color: "#b86507",
                "&:hover": {
                  backgroundColor: "#FFF5E8",
                },
              }}
            >
              Confirm New Product
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;
