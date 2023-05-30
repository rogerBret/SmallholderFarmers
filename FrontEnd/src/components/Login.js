import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  return (
    <div className="container">
      <form
        onSubmit={handleSubmit(() =>
          console.log("user registered successfully!")
        )}
      >
        <h1>Sign Up</h1>
        {/* email */}
        <div className="input-container">
          <p className="error-message">{errors.email?.message}</p>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: "Please Enter Your Email!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please Enter A Valid Email!",
              },
            })}
            type="email"
            id="email"
            className={`${errors.email && "input-error"}`}
          />
        </div>

        {/* password */}
        <div className="input-container">
          <p className="error-message">{errors.password?.message}</p>
          <label htmlFor="password">password</label>
          <input
            {...register("password", {
              required: "Please Enter Your Password",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long!",
              },
            })}
            type="password"
            id="password"
            className={`${errors.password && "input-error"}`}
          />
        </div>

        {/* confirm password */}
        <div className="input-container">
          <p className="error-message">{errors.confirmPassword?.message}</p>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            {...register("confirmPassword", {
              required: "Please Confirm Your Password",
              validate: (match) => {
                const password = getValues("password");
                return match === password || "Passwords should match!";
              },
            })}
            type="password"
            id="confirmPassword"
            className={`${errors.confirmPassword && "input-error"}`}
          />
        </div>

        {/* button */}
        <button>SIGN UP</button>
      </form>
    </div>
  );
}

export default Login;