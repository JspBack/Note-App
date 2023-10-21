import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {
  return (
    <div className="text-white w-screen h-screen flex flex-col">
      <Navbar />
      <div className="h-full w-full flex flex-col justify-center items-center">
        <h1 className="my-2">WELCUM TO NOTE APP</h1>
        <button className="outline rounded-lg px-4 hover:bg-yellow-300 ease-in-out transition-all hover:text-black   ">
          <a href="/home">LOGİN</a>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
