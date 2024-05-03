import React from "react";
import { IsLogin } from "../utils";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  return IsLogin() ? children : <Navigate to="/login" />;
}
