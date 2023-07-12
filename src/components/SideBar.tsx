import {
  HomeIcon,
  TvIcon,
  FilmIcon,
  BookmarkIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { changeRoute } from "../service/Fetching";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const SideBar = () => {
  const dispatch = useAppDispatch();
  const { routing } = useAppSelector((state) => state);
  const routero = routing.route;
  const handlerRouting = (texto: string) => {
    dispatch(changeRoute(texto));
  };
  return (
    <nav className="bg-[#0e0b14] h-full w-[5rem] flex flex-col items-center align-middle top-0 fixed justify-around">
      <section className="flex  gap-8 lg:gap-16 flex-col flex-wrap justify-center text-center">
        <div
          className={`text-[#f9f9f9] hover:opacity-100  hover:text-[#f9f9f9]  ${
            routero === "Home" ? "text-[#f9f9f9]" : "opacity-20"
          }`}
          onClick={() => handlerRouting("Home")}
        >
          <HomeIcon className={`h-7 w-full  cursor-pointer`} />
          <span className="cursor-pointer">Home</span>
        </div>
        <div
          className={`text-[#f9f9f9] hover:opacity-100  hover:text-[#f9f9f9] ${
            routero === "Movies" ? "text-[#f9f9f9]" : "opacity-20"
          }`}
          onClick={() => handlerRouting("Movies")}
        >
          <FilmIcon className={`h-7 w-full text-[#f9f9f9] cursor-pointer`} />
          <span className="cursor-pointer">Movies</span>
        </div>
        <div
          className={`text-[#f9f9f9] hover:opacity-100  hover:text-[#f9f9f9] ${
            routero === "Series" ? "text-[#f9f9f9]" : "opacity-20"
          }`}
          onClick={() => handlerRouting("Series")}
        >
          <TvIcon className={`h-7 w-full text-[#f9f9f9] cursor-pointer`} />
          <span className="cursor-pointer">Series</span>
        </div>
        <div
          className={`text-[#f9f9f9] hover:opacity-100  hover:text-[#f9f9f9] ${
            routero === "Bookmarked" ? "text-[#f9f9f9]" : "opacity-20"
          }`}
          onClick={() => handlerRouting("Bookmarked")}
        >
          <BookmarkIcon
            className={`h-7 w-full text-[#f9f9f9] cursor-pointer`}
          />
          <span className="cursor-pointer">Favorites</span>
        </div>
      </section>
      <aside className="flex flex-col gap-4 w-16 h-32 align-middle justify-center ">
        <a
          href="https://www.linkedin.com/in/alan-kevin-corman-samanamud-22b566176/"
          className=""
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-white h-7 w-full cursor-pointer" />
        </a>
        <a
          href="https://github.com/Laoset"
          className=""
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-white h-7 w-full cursor-pointer" />
        </a>
      </aside>
    </nav>
  );
};

export default SideBar;
