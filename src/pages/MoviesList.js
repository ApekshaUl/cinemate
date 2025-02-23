import {Card} from '../components'
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';
export const MoviesList = ({apiPath,title}) => {
  
  const {data: movies} = useFetch(apiPath);
  useEffect(()=>
      {
        document.title = `${title}/Cinemate`;
      });
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
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
