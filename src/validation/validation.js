import React from "react";

export const isPresent = (data) => (data ? true : false);
export const comparison = (data, other) => data === other;
export const email = (data) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    data
  );
export const password = (data) => /^(?=.*\d).{6,20}$/.test(data);
export const mobile = (data) => /^().{5,15}$/.test(data);
export const number = (data) => /^([0-9\-\(\)\s]+).{0,50}$/.test(data);
export const date = (data) => /^(\d{1,2})(\/)(\d{1,2})(\/)(\d{4})$/.test(data);
export const pincode = (data) => /^().{5,100}$/.test(data);



export function validateLogin(values) {
  var errors = {};
  if (!values?.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values?.password) {
    errors.password = "Password Required";
  } else if (values?.password?.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }
  return errors;
}






  