import React from "react";
interface Props {
  children: string;
}
const Alert = ({ children }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {children}
    </div>
  );
};
export default Alert;
