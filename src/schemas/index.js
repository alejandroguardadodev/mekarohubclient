import * as yup from "yup";

export const signUpSchemas = yup.object({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    username: yup.string().required('Username is required').min(4, "Username too short"),
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup.string().required('Password is required').min(4, "Password too short"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords don't match!").required('Confirm Password is required').min(4, "Confirm Password too short"),
  }).required();

  export const RecoverPasswordSchemas = yup.object({
    entity: yup.string().required('This field is required'),
  }).required();

  export const NewPasswordSchemas = yup.object({
    password: yup.string().required('Password is required').min(4, "Password too short"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords don't match!").required('Confirm Password is required').min(4, "Confirm Password too short"),
  }).required();