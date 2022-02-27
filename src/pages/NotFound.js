import { Link } from "react-router-dom";
import notFoundImg from "../assets/NotFound.png";

const NotFound = () => {
  return (
    <div className="row align-items-center center-img">
      <div className="col-xl-8 col-lg-9 col-12 mx-auto p-md-0">
        <div className="d-flex flex-column">
          <img className="img-fluid" src={notFoundImg} alt="Page not Found" />
          <Link className="btn btn-info" to="/">
            <i class="bi bi-arrow-left-circle me-2"></i>
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
