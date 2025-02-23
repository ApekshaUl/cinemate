import { Link,NavLink,useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { useEffect, useState } from 'react';
export const Header = () => {
  const [hidden,setHidden] = useState(true);
  const activeClass = "text-base block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
  const inactiveClass = " text-base block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  const [darkMode,setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode"))||false);
  const navigate = useNavigate();
  useEffect( () => {
      localStorage.setItem("darkMode" , JSON.stringify(darkMode));
      
      if(darkMode)
      {
        document.documentElement.classList.remove('dark');
      }
      else{
        document.documentElement.classList.add('dark');
      }
  },[darkMode])
  const handleSubmit = (event) =>
  {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    return navigate(`/search?query=${queryTerm}`)
  }
  return (
    <header>
            <nav className="bg-white border-gray-200 border-b-2 dark:bg-gray-900 dark:border-b-2">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-8" alt="Cinemate Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cinemate</span>
                </Link>

                <div id="mobile-nav" className="flex md:order-2">
                  <button onClick = {()=>setDarkMode(!darkMode)} className='p-2 border-2 border-gray-300 rounded mx-2  '>
                    {darkMode ? 
                    (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
                      </svg>) : 
                    (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="5"/>
                      <line x1="12" y1="1" x2="12" y2="3"/>
                      <line x1="12" y1="21" x2="12" y2="23"/>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                      <line x1="1" y1="12" x2="3" y2="12"/>
                      <line x1="21" y1="12" x2="23" y2="12"/>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                    </svg>
                    )}

                  </button>
                  <button onClick={()=>setHidden(!hidden)} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className={`md:${hidden ? "hidden" : ""} text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1`}>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                  <div className="relative hidden md:block">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                      <span className="sr-only">Search icon</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="search-navbar" name="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                    </form>
                    
                  </div>

                  <button onClick={()=>setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:${hidden ? "hidden" : ""} hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false"`}>
                      <span className="sr-only">Open main menu</span>
                      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                      </svg>
                  </button>

                </div>
                  <div id="nav-links" className={`items-center justify-between ${hidden ? "hidden" : ""} w-full md:flex md:w-auto md:order-1" id="navbar-search"`}>
                    <div className="relative mt-3 md:hidden">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <input type="text" id="search-navbar" name="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                      </form>
                    </div>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                      <li>
                        <NavLink to="/" className= {({isActive})=> isActive ? activeClass : inactiveClass}>Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/movies/popular" className= {({isActive})=> isActive ? activeClass : inactiveClass}>Popular</NavLink>
                      </li>
                      <li>
                        <NavLink to="/movies/top" className={({isActive})=> isActive ? activeClass : inactiveClass}>Top Rated</NavLink>
                      </li>
                      <li>
                        <NavLink to="/movies/upcoming" className={({isActive})=> isActive ? activeClass : inactiveClass}>Upcoming</NavLink>
                      </li>
                    </ul>
                  </div>

              </div>
            </nav>


    </header>
  )
}
