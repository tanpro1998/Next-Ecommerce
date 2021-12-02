const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validate = (name, email, password, cf_password) => {
  if (!name || !email || !password) {
    return "Please check all fields!";
  }
  if (!validateEmail) {
    return "Invalid email!";
  }

  if (password.length < 6) {
    return "Password must be at least 6 character!";
  }

  if (password !== cf_password) {
    return "Confirm Password not match!";
  }
};

export default validate;
