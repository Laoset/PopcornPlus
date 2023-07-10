import { PiPopcornFill } from "react-icons/pi";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { getOneResult, changeRoute } from "../service/Fetching";
import { useAppDispatch } from "../redux/hooks";
const Navbar = () => {
  const dispatch = useAppDispatch();
  const handlerSearch = (texto: string) => {
    dispatch(getOneResult(texto));
    dispatch(changeRoute("finding"));
  };
  return (
    <nav className="bg-[#0e0b14] h-16 w-full flex flex-row items-center align-middle fixed z-50 justify-between">
      <div className="flex flex-row align-middle justify-center text-center items-center gap-4">
        <PiPopcornFill className="h-fit mt-1 w-16 text-red-600 cursor-pointer ml-8" />
        <h1 className="text-white text-2xl">PopCorn+</h1>
      </div>
      <div className="bg-[#4c516d] h-10 flex flex-row mr-8 rounded-lg items-center w-80 gap-4">
        <MagnifyingGlassIcon className="ml-2 h-6 w-6 text-white opacity-80" />
        <input
          className="bg-transparent w-full text-white h-full outline-none"
          placeholder="Search"
          onChange={(event) => handlerSearch(event.target.value)}
        />
      </div>
    </nav>
  );
};
export default Navbar;
