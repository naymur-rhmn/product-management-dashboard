import { FaRegBell } from "react-icons/fa";

const Header = (props) => {
  const user = "";
  return (
    <div className="min-h-[80px] max-h-[80px] z-50 shadow w-full bg-white sticky top-0 flex px-6 justify-between items-center">
      <p></p>

      <div className="flex gap-4 items-center">
        <div className="relative">
          <span className="absolute h-5 w-5 bg-[#EF4444] rounded-full text-center text-xs text-white flex justify-center items-center -top-1">
            01
          </span>
          <FaRegBell size={29} />
        </div>
        <div>
          {user ? (
            <img
              className="h-10 w-10 bg-gray-400 rounded-full shadow"
              src=""
              alt=""
            />
          ) : (
            <div className="h-10 w-10 bg-gray-400 rounded-full"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
