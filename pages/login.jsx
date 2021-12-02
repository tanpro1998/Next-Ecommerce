import Head from "next/head";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Login Page</title>
      </Head>
      <form className="mx-auto my-4" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Login
        </button>

        <p>
          You don't have a account!
          <Link href="/register">
            <a>Register Now</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
