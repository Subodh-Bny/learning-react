import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { id } = useParams();
  return (
    <>
      <h1 className="text-center">Hello {id}</h1>
    </>
  );
}

export default User;
