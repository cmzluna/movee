import React, { useState } from "react";
import { useSelector } from "react-redux";
import Drawer from "../Drawer";
import Favorites from "../Favorites";
import { State, User } from "../../types";
import { useAppSelector } from "../../store/hooks";
// import { selectLoggedUser, selectUsers } from "../../store/slices/users";
import avatar from "../../assets/profile-02.png";
import iconUser from "../../assets/iconUser.png";
const Navigator = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const loggedUser = useAppSelector(selectLoggedUser);
  // const stateUsers = useAppSelector(selectUsers);

  return (
    <nav className="  sticky top-0 z-50 flex items-center justify-between bg-indigo-500  md:mx-2 lg:mx-6 md:mt-4 md:mb-[33px] md:rounded-[10px] lg:fixed lg:left-0 lg:mr-0 lg:h-3/4 lg:flex-col lg:py-4 ">
      <h2>dfdsfdsfdsfd</h2>

      <div className=" flex  w-3/4 items-center justify-between lg:h-[200px] lg:flex-col 2xs:w-2/5">
        {/* Menu */}

        <a
          href="#"
          className="btn text-primary border-primary  md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
        >
          {" "}
          Log in
        </a>

        <div className="h-14 w-12 ">
          <div className="flex items-center justify-center rounded-full bg-cyan-200 p-px">
            {isOpen ? (
              <button
                className="flex text-4xl text-white items-center cursor-pointer  right-10 top-6 z-50"
                onClick={() => setIsOpen(!isOpen)}
              >
                x
              </button>
            ) : (
              <svg
                onClick={() => setIsOpen(!isOpen)}
                className="  z-30 flex items-center cursor-pointer right-10 top-6"
                fill="#2563EB"
                viewBox="0 0 100 80"
                width="20"
                height="30"
              >
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
              </svg>
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
        </div>

        <div className="nav-profile group relative flex items-center gap-2 pointer height-32">
          <a
            href="#"
            className="btn flex items-center text-primary border-solid border-white md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
          >
            <img
              className="nav-profile-img w-8 h-8  fill-white"
              src={iconUser}
              alt="temp"
            />
          </a>
          <div className=" nav-profile-menu hidden bg-gray-600  opacity-80 group-hover:flex flex-col top-full  absolute w-22 ">
            <div className="  flex flex-col gap-2.5 p-4 border-2 rounded-md border-white">
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
            <div className="nav-profile-menu-signout p-8 ">
              Sign out of account
            </div>
          </div>
        </div>
      </div>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <>
          <header className="font-bold text-lg">Your favorites</header>

          <Favorites />
        </>
      </Drawer>
    </nav>
  );
};

export default Navigator;
