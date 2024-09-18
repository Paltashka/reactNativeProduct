import * as Yup from "yup";

export const ProductSchema = Yup.object().shape({
  name: Yup.string()
    .strict(false)
    .matches(/^\s*\S[\s\S]*$/, "This name cannot contain only blankspaces")
    .trim()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number()
    .min(1, "Too Short!")
    .max(100000, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .matches(/^(?!\s+$).*/, "This name cannot contain only blankspaces")
    .min(15, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
