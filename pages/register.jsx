import Head from "next/head";
import Link from "next/link";
import { useState, useContext } from "react";
import validate from "../validate/validate";
import { DataContext } from "../store/GlobalState";
import { postData } from "../data/fetchData";

const Register = () => {
  const initialState = { name: "", email: "", password: "", cf_password: "" };

  const [user, setUser] = useState(initialState);
  const { name, email, password, cf_password } = user;

  const [state, dispatch] = useContext(DataContext);

  const changeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMessage = validate(name, email, password, cf_password);
    if (errMessage) {
      return dispatch({ type: "NOTIFY", payload: { error: errMessage } });
    }
    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/register", user);
    if (res.err) return dispatch({ type: "NOTIFY", payload: { err: res.err } });
    return dispatch({type: 'NOTIFY', payload: {success: res.message}})
  };
  return (
    <div>
      <div>
        <Head>
          <title>Login Page</title>
        </Head>
        <form
          className="mx-auto my-4"
          style={{ maxWidth: "500px" }}
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label className="form-label">User name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              value={name}
              onChange={changeInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              unique="true"
              name="email"
              value={email}
              onChange={changeInput}
            />
            <div id="emailHelp" className="form-text">
              We ll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              unique="true"
              name="password"
              value={password}
              onChange={changeInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="cf_password"
              value={cf_password}
              onChange={changeInput}
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Register
          </button>
          <p>
            Already have a account!
            <Link href="/login">
              <a>Login Now</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
