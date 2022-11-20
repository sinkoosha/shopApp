import React from "react";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userLogin } from "../../fetchers/User/UserSlice";

function Login() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ username, password }) => {
    console.log(username, password);
    dispatch(userLogin({ username, password }));
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active"> Sign In </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="login"
            {...register("username", {
              required: "وارد کردن این فیلد اجباری است ",
            })}
          />
          <span className="errorMessage">
            {errors?.username?.message}
          </span>
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
            {...register("password", {
              required: "وارد کردن این فیلد اجباری است ",
            })}
          />
          <span className="errorMessage">
            {errors?.password?.message}
          </span>
          <input
            type="submit"
            className="fadeIn fourth"
            value="Log In"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
