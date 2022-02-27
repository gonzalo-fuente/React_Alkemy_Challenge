import LoginForm from "../components/auth/LoginForm";
import Loading from "../components/common/Loading";
import { useState } from "react";

import loginUser from "../utils/loginUser";
import loginImg from "../assets/Login.png";
import { useAuth } from "../utils/useAuth";

/* Sweet Alert */
import swal from "sweetalert";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      const token = await loginUser({
        email: values.email,
        password: values.password,
      });
      if (token) {
        login(token);
      }
    } catch (error) {
      swal({
        title: "Oops...",
        text: error.message,
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row center-login justify-content-center align-items-center">
        <div className="col-lg-5 col-md-6 col-sm-9">
          <img
            className="img-fluid w-100 d-none d-md-block mx-auto"
            src={loginImg}
            alt="Sign up logo"
          />
        </div>
        <div className="col-lg-5 col-md-6 col-sm-9">
          {isLoading && <Loading />}
          <LoginForm handleSubmit={handleSubmit} isHidden={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Login;
