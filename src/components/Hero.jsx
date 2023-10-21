import Navbar from "./Navbar";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="text-white w-screen h-screen flex flex-col">
      <Navbar logged />
      <div className=" text-black w-full h-full flex flex-col xs:flex-row justify-center items-center">
        <div className="w-full  xs:h-full h-[60%] bg-white flex flex-col justify-center items-center ">
          <div className="w-[60%] xs:h-[80%] h-[60%] bg-gray-500 flex flex-col items-center">
            <ul className="h-full w-full bg-red-400 items-center flex flex-col gap-[2px] scroll-smooth overflow-y-scroll">
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
              <li className="w-full xs:h-[5%] h-[10%] bg-green-400 ">1</li>
            </ul>
          </div>
        </div>
        <div className="w-full xs:h-full h-[40%] bg-red-300 flex flex-col justify-center items-center">
          <div className="w-[60%] h-[80%]  bg-gray-500 items-center flex flex-col justify-center">
            <textarea
              className="w-[90%] h-[10%] text-white outline-none resize-none mb-10"
              placeholder="Write your note here"
            ></textarea>
            <div className="outline w-max rounded-sm h-auto mb-5 ">
              You learned 0 words
            </div>
            <button className="outline w-24  rounded-xl hover:text-black hover:bg-yellow-500 transition-all ease-in-out h-10">
              Submit
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Hero;
