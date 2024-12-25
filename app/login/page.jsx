"use client";

import { useActionState } from "react";
import { login } from "../../actions/userController";

export default function Page() {
  const [formState, formAction] = useActionState(login, {});

  return (
    <>
      <h2 className="text-center text-2xl text-gray-500 mb-5">Log In</h2>
      <form
        action={formAction}
        className="max-w-xl mx-auto  rounded-3xl shadow-2xl p-6 sm:p-8 md:p-[8rem] space-y-4"
      >
        <div className="mb-3">
          <label htmlFor="username" className="text-lg font-bold text-white">
            UserName
          </label>
          <input
            type="text"
            placeholder="username"
            name="username"
            id="username"
            className="input input-bordered font-bold w-full mt-2 text-lg max-w-xs ring-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {formState.success == false && (
            <div role="alert" className="alert alert-error mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>{formState.message}</span>
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="text-lg font-bold text-white">
            Password
          </label>
          <input
            type="password"
            placeholder="password"
            autoComplete="off"
            name="password"
            id="password"
            className="input input-bordered font-bold w-full mt-2 text-lg max-w-xs ring-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button className="btn btn-accent w-full max-w-xs">Submit</button>
      </form>
    </>
  );
}
