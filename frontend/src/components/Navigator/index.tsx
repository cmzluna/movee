import React, { useState } from "react";
import { useSelector } from "react-redux";
import Drawer from "../Drawer";
import Favorites from "../Favorites";
import { State, User } from "../../types";
import { useAppSelector } from "../../store/hooks";
// import { selectLoggedUser, selectUsers } from "../../store/slices/users";
import avatar from "../../assets/profile-02.png";
import Settings from "../../assets/Settings.svg";
import Bookmarks from "../../assets/bookmarks.svg";
import MovieLogo from "../../assets/movie-main.svg";
import { resetUser } from "../../store/slices/users";
import { useAppDispatch } from "../../store/hooks";
import { clearAllFavorites } from "../../store/slices/favorites";
import { useDispatch } from "react-redux";

const Navigator = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const loggedUser = useAppSelector(selectLoggedUser);
  // const stateUsers = useAppSelector(selectUsers);
  const dispatch = useDispatch();

  const signOut = () => {
    console.log("SIGN OUT!!!");
    dispatch(resetUser());
    dispatch(clearAllFavorites());
    return;
  };

  return (
    <nav className="  sticky gradient_border bg-gray-900 top-0 z-50 p-2 flex items-center justify-between  opacity-80 md:mx-2 lg:mx-6 md:mt-4 md:mb-[33px] md:rounded-[8px] lg:fixed lg:left-0 lg:mr-0 lg:h-2/4 lg:flex-col lg:py-4 ">
      <img
        className="nav-profile-img w-16 h-16  fill-white"
        src={MovieLogo}
        alt="temp"
      />
      <div className=" flex w-full   items-center justify-around md:w-2/4 lg:w-full lg:h-2/4 lg:flex-col">
        {/* Menu */}

        <a
          href="#"
          className="btn text-primary border-primary  md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
        >
          {" "}
          Log in
        </a>

        <div className="flex items-center hover:cursor-pointer  justify-center   ">
          {isOpen ? (
            <button
              className="flex text-4xl text-white items-center  right-10 top-6 z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              x
            </button>
          ) : (
            <div onClick={() => setIsOpen(!isOpen)}>
              <img
                className="nav-profile-img w-8 h-8   "
                src={Bookmarks}
                alt="temp"
              />
            </div>
            // <svg
            //   onClick={() => setIsOpen(!isOpen)}
            //   className="  z-30 flex items-center cursor-pointer right-10 top-6"
            //   fill="#2563EB"
            //   viewBox="0 0 100 80"
            //   width="20"
            //   height="30"
            // >
            //   <rect width="100" height="10"></rect>
            //   <rect y="30" width="100" height="10"></rect>
            //   <rect y="60" width="100" height="10"></rect>
            // </svg>
          )}

          {/* <div
            className={`top-4   left-24  bg-blue-600   text-white fixed h-full z-40 ease-in-out duration-300 ${
              isOpen ? "translate-x-0 " : "translate-x-full"
            }`}
          >
            <h3 className="mt-20 text-4xl font-semibold text-white">
              I am a sidebar
            </h3>
          </div> */}
        </div>

        <div className="nav-profile relative btn-rounded  group flex items-center pointer height-32">
          <a
            href="#"
            className="btn flex items-center text-primary    hover:text-white transition ease-out duration-500"
          >
            <img
              className="nav-profile-img w-8 h-8  fill-white"
              src={Settings}
              alt="temp"
            />
          </a>
          <div className=" nav-profile-menu  hidden bg-gray-800 opacity-90 group-hover:flex flex-col   top-12 right-0 lg:right-auto lg:left-0 absolute ">
            <div className="  flex flex-col  p-2 border-2 rounded-md border-white">
              <div
                className="nav-profile-menu-users-item flex items-center "
                key="hardcoded"
              >
                <img
                  className="nav-profile-img w-7 h-7 mr-2"
                  src={avatar}
                  alt="temp"
                />{" "}
                <p>Guest User</p>
              </div>
            </div>
            <div className="nav-profile-menu-signout p-8 " onClick={signOut}>
              Sign out of account
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
