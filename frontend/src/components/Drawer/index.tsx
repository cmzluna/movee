import React from "react";
import { useNavigate, useParams } from "react-router-dom";

type Props = {
  children: JSX.Element;
  type?: string;
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
};

const Drawer = ({
  children,
  type = "FavoriteList",
  isOpen,
  setIsOpen,
}: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const movieId = id && parseInt(id);

  const goBack = () => {
    if (movieId) {
      navigate(-1);
      return;
    }

    setIsOpen(false);
  };

  return (
    <main
      onMouseDown={() => setIsOpen(false)}
      className={
        " translate-y-20 md:translate-y-24  lg:translate-y-0 fixed overflow-hidden   z-10  bg-opacity-90 inset-0 transform ease-in-out h-full md:mx-4 lg:h-full lg:mt-4" +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 lg:translate-x-34  "
          : " transition-all delay-200 opacity-0 translate-y-0 -translate-x-full lg:translate-0  ") +
        (type === "MovieDetail" && " flex justify-center")
      }
    >
      <section
        style={{
          background: "rgba(0, 0, 0, 0.95)",
        }}
        className={
          "   gradient_border bg-app-dark-blue rounded-lg absolute bg-white  w-full shadow-xl duration-500 ease-in-out transition-all transform lg:translate-x-24 " +
          (type === "MovieDetail"
            ? " sm:translate-y-12 lg:translate-x-0 lg:w-3/4 "
            : " lg:w-5/6") +
          (isOpen
            ? ""
            : "-translate-y-full -translate-x-full lg:-translate-x-0 lg:-translate-y-0")
        }
      >
        <article
          className={
            "  relative p-4 flex flex-col   " +
            (type === "MovieDetail" ? " h-full" : " overflow-y-scroll")
          }
        >
          {children}
        </article>
      </section>

      <section
        className="  w-full h-full cursor-pointer "
        onClick={goBack}
      ></section>
    </main>
  );
};

export default Drawer;
