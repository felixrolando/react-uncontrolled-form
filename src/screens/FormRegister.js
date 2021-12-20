import React, { useRef } from "react";
import { createUser } from "../services/createUserService";
import { nanoid } from "nanoid";

export const FormRegister = () => {
  const formUser = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, lastName, email, acceptTerm } = formUser.current;
    const data = {
      id: nanoid(),
      name: name.value,
      lastName: lastName.value,
      email: email.value,
      acceptTerm: acceptTerm.checked,
    };
    createUser(data);
  };

  return (
    <div className="container bg-dark text-light">
      <form onSubmit={handleSubmit} ref={formUser}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Enter your Last name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="acceptTerm"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I agree to the terms of service
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
