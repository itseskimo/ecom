import * as Yup from "yup";

export const authValidation = Yup.object().shape({
    username: Yup.string().required("Please enter your first name!"),
    password: Yup.string()
    .required("Please enter the password!")
    // .matches(
    //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/,
    //   "Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one numeric digit, and one special character!"
    // ),
  });