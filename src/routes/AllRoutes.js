import {Routes,Route} from "react-router-dom";
import { MovieDetail,MoviesList,PageNotFound,Search } from "../pages";


export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
        <Routes>
            <Route path="/" element={<MoviesList apiPath="movie/now_playing" title = "Home"/>} />
            <Route path="search" element={<Search apiPath="search/movie" />}/>
            <Route path="movies/:id" element={<MovieDetail/>}/>
            <Route path="movies/popular" element={<MoviesList apiPath="movie/popular" title = "Popular"/>}/>
            <Route path="movies/top" element={<MoviesList apiPath="movie/top_rated" title = "Top-Rated"/>}/>
            <Route path="movies/upcoming" element={<MoviesList apiPath="movie/upcoming" title = "Upcoming"/>}/>
            <Route path="*" element={<PageNotFound/>} title="Page Not Found"/> 
        </Routes>
    </div>
  )
}
