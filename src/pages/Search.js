import { useSearchParams } from 'react-router-dom';
import {Card} from '../components'
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';
export const Search = ({apiPath}) => {
 
  const[searchParams] = useSearchParams();
  const queryTerm = searchParams.get("query");
  const {data: movies} = useFetch(apiPath,queryTerm);
  useEffect(()=>{
    document.title = `Search result for ${queryTerm}/Cinemate`;
  });
  return (
    <main>
      <section>
        <p className='text-3xl pt-4 text-gray-700 dark:text-white'>{movies.length===0 ? `No result found for '${queryTerm}'`:`Result Found for '${queryTerm}'`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {
            movies.map((movie) => (
              <Card key={movie.id} movie={movie}/>
            ))
          }
            
        </div>
      </section>
    </main>
  )
}
