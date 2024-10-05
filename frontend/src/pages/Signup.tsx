import {FormEvent, useContext, useState} from "react";
import {getApiConfiguration} from "../api/utils.tsx";
import {ApiApi} from "api-client";
import {AuthContext} from "../auth/authcontext.tsx";
import {useNavigate} from "react-router-dom";

const getClient = () => {
  return new ApiApi(getApiConfiguration());
};

export default function SignupPage() {
  const {setUserDetails} = useContext(AuthContext);
  const [ email, changeEmail ] =  useState('');
  const [ password, changePassword ] =  useState('');
  const navigate = useNavigate();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const client = getClient();
    // todo: the backend serializer requires two passwords, but we'll just make them the same.
    const credentials = {email, password1: password, password2: password};
    const jwt = client.apiAuthRegisterCreate({register: credentials}).then(data => {
      setUserDetails(data);
      return navigate('/dashboard/profile/');
    }).catch(error => console.log('error ->', error));
  }

  return (
    <div className="flex justify-center min-h-screen my-8 ">
      <div className="w-96 px-4 py-4">
        <div>
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
            Sign Up
          </h2>
          <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
            <div className="form-control w-full">
              <label className="label font-bold" htmlFor="email">
                Email
              </label>
              <input type="email" id="email"
                     className="input input-bordered w-full"
                     placeholder="name@example.com" required
                     onChange={(e) => changeEmail(e.target.value)}
                     value={email}
                     name={'email'}/>
            </div>
            <div className="form-control w-full">
              <label className="label font-bold" htmlFor="password">
                Password
              </label>
              <input type="password" id="password"
                     className="input input-bordered w-full"
                     required
                     onChange={(e) => changePassword(e.target.value)}
                     value={password}
                     name={'password'}/>
            </div>
            <div className="mt-2">
              <button type="submit"
                      className="btn btn-primary btn-block">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
