import { Link } from "react-router-dom";
import Button from "../../components/Button";

const ErrorPage = () => {
  return (
    <div className="flex items-center flex-col justify-center min-h-screen">
      <h1 className="text-5xl font-bold text-red-600">Oops!</h1>
      <p className="my-4 text-2xl">404 - PAGE NOT FOUND</p>
      <Link to="/" className="text-white">
        <Button title="GOTO HOMEPAGE" />
      </Link>
    </div>
  );
};

export default ErrorPage;
