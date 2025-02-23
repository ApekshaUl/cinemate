import {Link} from 'react-router-dom';
import pagenotfound from '../assets/images/pagenotfound.png';
import { useEffect } from 'react';
export const PageNotFound = () => {
  useEffect(()=>
    {
      document.title = `Page Not Found/Cinemate`;
    });
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className='text-7xl my-10 text-gray-700 dark:text-gray-200 font-bold'>404, OOPS!</p>
          <div className='max-w-lg'>
             <img className="rounded" src= {pagenotfound} alt="404 not found"/>
          </div>
        </div>
        <div className='flex justify-center my-4'>
            <Link to='/'>
              <button className='w-64 text-xl bg-gradient-to-r from-cyan-500 to-blue-500 ... rounded-lg px-5 py-2.5 mr-2 mb-2 text-white hover:cursor-pointer font-medium'>Back to Cinemate</button>
            </Link>
        </div>
      </section>
    </main>
  )
}
