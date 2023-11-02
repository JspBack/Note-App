import Navbar from "./Navbar";
import Footer from "./Footer";
import bg from "../assets/bg.jpg";
import { signInWithGoogle } from "../firebase";
import { Link } from "react-router-dom";

const Login = () => {
  const loginHandler = () => {
    signInWithGoogle();
  };
  return (
    <div className="text-white w-full h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="h-full w-full flex flex-col justify-center items-center">
        <img src={bg} className="rounded-lg flex mb-5 " />
        <h1 className="my-2">WELCUM TO NOTE APP</h1>
        <button className="outline rounded-lg px-4 hover:bg-yellow-300 ease-in-out transition-all hover:text-black   ">
          {localStorage.getItem("name") ? (
            <Link to="home">You can go</Link>
          ) : (
            <>
              <a onClick={loginHandler}>LOGİN</a>
            </>
          )}
        </button>
        <p className="text-sm mt-5">after signing in reload the page</p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
