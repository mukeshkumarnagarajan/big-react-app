import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IUser } from "../../models/UserTypes";
import axios, { AxiosResponse } from "axios";

const AddUser: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isError, setIsError] = useState(false);
  const { register, handleSubmit } = useForm<IUser>();

  const handleAddUser = (formData: IUser) => {
    console.log(formData);
    setIsLoading(true);

    axios
      .post("https://jsonplaceholder.typicode.com/users", formData)
      .then((res: AxiosResponse<IUser>) => {
        console.log(res);
        setIsSaved(true);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      })
      .finally(() => {
        console.log("It's Over!");
        setIsLoading(false);
      });
  };

  return (
    <div className="row">
      <h1>
        <Link to="/users" className="btn btn-link">
          &lt; Go Back
        </Link>
        Add User
      </h1>

      <form
        className="col-md-6 offset-md-3"
        onSubmit={handleSubmit(handleAddUser)}
      >
        <div className="form-group row mb-3">
          <label className="col-sm-2 col-form-label" htmlFor="nameInput">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              {...register("name")}
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="phoneInput" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              {...register("phone")}
              className="form-control"
              placeholder="Enter Phone"
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="emailInput" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              {...register("email")}
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
        </div>

        {isSaved && (
          <div className="alert alert-success">Saved Successfully</div>
        )}

        {isError && (
          <div className="alert alert-danger">
            Some Error Occurred. Try again later!
          </div>
        )}

        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">
              {isLoading? 'Submitting...':'Submit'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
