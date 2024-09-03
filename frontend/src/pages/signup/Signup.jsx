import React from "react";
import { GenderCheckbox } from "./GenderCheckbox";

function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SIGN UP
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">
                Re enter the password
              </span>
            </label>
            <input
              type="password"
              placeholder=" Re enter the password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <GenderCheckbox />
          <a
            href="#"
            className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have account ?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
