import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { useEffect } from "react";
import { changeRoute, getPopularMovies } from "./service/Fetching";
import SideBar from "./components/SideBar";
import MainData from "./components/MainData";
import Navbar from "./components/Navbar";
import Findings from "./pages/findings";
import MoviesAll from "./pages/MoviesAll";
import SeriesAll from "./pages/SeriesAll";
import Favorites from "./pages/Favorites";
import Detail from "./pages/Detail";
function App() {
  const dispatch = useAppDispatch();
  const { detail, routing } = useAppSelector((state) => state);
  const routero = routing.route;
  console.log(routero);
  useEffect(() => {
    dispatch(getPopularMovies());
  }, [detail]);

  const renderPage = () => {
    let defoult = <MainData />;

    if (routero === "Movies") {
      defoult = <MoviesAll />;
      return defoult;
    } else if (routero === "Series") {
      defoult = <SeriesAll />;
      return defoult;
    } else if (routero === "Bookmarked") {
      defoult = <Favorites />;
      return defoult;
    } else if (routero === "Detalle") {
      defoult = <Detail />;
      return defoult;
    }
    if (
      Object.keys(detail.detail.results).length > 0 &&
      routero === "finding"
    ) {
      return (
        <>
          <Findings />
        </>
      );
    } else {
      dispatch(changeRoute("Home"));
      return defoult;
    }
  };
  return (
    <div className="flex flex-row h-screen w-full ">
      <Navbar />
      <SideBar />
      <div className="relative ml-20 mt-16 w-full">{renderPage()}</div>
    </div>
  );
}

export default App;
