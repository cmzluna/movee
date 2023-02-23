import { useState } from "react";
import Drawer from "../Drawer";
import Favorites from "../Favorites";
import avatar from "../../assets/profile-02.png";
import Settings from "../../assets/Settings.svg";
import Bookmarks from "../../assets/bookmarks.svg";
import Search from "../../assets/search.svg";
import MovieLogo from "../../assets/movie-main.svg";
import { resetUser } from "../../store/slices/users";
import { clearAllFavorites } from "../../store/slices/favorites";
import { useDispatch } from "react-redux";

const Navigator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(resetUser());
    dispatch(clearAllFavorites());
    return;
  };

  return (
    <nav className="  sticky gradient_border opacity-90 bg-gray-900 top-0 z-50 p-1 py-2 flex items-center justify-between  opacity-80 md:mx-2 lg:mx-6 md:mt-4 md:mb-[33px] md:rounded-[8px] md:p-3 lg:fixed lg:left-0 lg:mr-0 lg:h-2/4 lg:flex-col lg:py-4 ">
      <img
        className="  w-14 h-14 ml-2 fill-white "
        src={MovieLogo}
        alt="temp"
      />
      <div className=" flex w-full  items-center justify-around md:w-2/4 lg:w-full lg:h-2/4 lg:flex-col">
        {/* Menu */}

        <a href="#" className="btn ">
          <img className="nav-profile-img w-6 h-6   " src={Search} alt="temp" />
        </a>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex btn items-center justify-center   "
        >
          {isOpen ? (
            <button className=" text-xl text-white items-center  ">x</button>
          ) : (
            <img
              className="nav-profile-img w-5 h-5   "
              src={Bookmarks}
              alt="temp"
            />
          )}
        </div>

        <div className="nav-profile relative btn group flex items-center  height-32">
          <div className=" flex items-center text-primary      transition ease-out duration-500">
            <img
              className="nav-profile-img w-5 h-5  fill-white"
              src={Settings}
              alt="temp"
            />
          </div>
          <div className=" hover:cursor-pointer hidden  opacity-90 group-hover:flex flex-col p-4 top-10 -right-4 lg:right-auto lg:left-0 absolute ">
            <div className="  flex flex-col  btn">
              <div className=" flex items-center px-8" key="hardcoded">
                <img
                  className="nav-profile-img w-6 h-6 mr-2"
                  src={avatar}
                  alt="temp"
                />{" "}
                <p>Guest User</p>
              </div>
            </div>
            <div
              className="nav-profile-menu-signout btn px-8"
              onClick={signOut}
            >
              Sign out
            </div>
          </div>
        </div>
      </div>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <>
          <header className="font-bold text-lg mb-4">Your favorites</header>

          <Favorites />
        </>
      </Drawer>
    </nav>
  );
};

export default Navigator;
