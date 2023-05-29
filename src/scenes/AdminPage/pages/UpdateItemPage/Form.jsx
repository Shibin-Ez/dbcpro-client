import { TextField, Box, Button } from "@mui/material";
import Dropzone from "react-dropzone";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Form = ({ product }) => {
  const SERVER_URL = useSelector((state) => state.url);

  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    picturePath: "",
  });

  useEffect(() => {
    setInitialValues({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      picturePath: product.picturePath,
    });
  }, [product]);

  const handleFormSubmit = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);
    console.log(formData);

    const updatedProductResponse = await fetch(`${SERVER_URL}/products/${product._id}`, {
      method: "PATCH",
      body: formData,
    });
    const updatedProduct = await updatedProductResponse.json();
    console.log(updatedProduct);
    onSubmitProps.resetForm();
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      enableReinitialize={true}
    >
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
              value={values.name}
              placeholder
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
              value={values.description}
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
                value={values.price}
                name="price"
              />
            </div>
            <TextField
              label="Stock"
              fullWidth
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.stock}
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
                  {values.picture = initialValues.picturePath}
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
            <Button
              fullWidth
              type="submit"
              sx={{
                marginTop: "2rem",
                padding: "0.8rem",
                letterSpacing: "0.1rem",
                backgroundColor: "#ffdfb6",
                color: "#b86507",
                "&:hover": {
                  backgroundColor: "#FFF5E8",
                },
              }}
            >
              Commit Changes
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;
