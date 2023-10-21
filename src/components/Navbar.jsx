const Navbar = (props) => {
  return (
    <div className="bg-gray-600 py-1 flex flex-row justify-end font-bold ">
      <div className="flex flex-row items-center xs:mr-5 mr-1  ">
        {props.logged ? (
          <>
            <div className="flex flex-row items-center mr-5 ">
              <h1>Hi,</h1>
              <p>Yusuf</p>
            </div>
            <a href="/" className="flex items-center justify-center">
              <img
                className="rounded-full h-10 w-10 hover:opacity-20 transition-all ease-in-out "
                alt="user"
              />
              <div
                className=" bg-blue-600 absolute 
              text-xxs pt-3 rounded-full items-center justify-center 
              h-10 w-10 opacity-0 transition-all ease-in-out  
              text-green-400 hover:opacity-80 "
              >
                SignOut
              </div>
            </a>
          </>
        ) : (
          <div className="outline rounded-sm px-4 ">
            <p>Login Screen</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
