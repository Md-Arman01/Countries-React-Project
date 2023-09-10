import { useState } from "react";

export default function Country({details, markName, markFlag}) {
    let {flags, name , population,subregion } = details

    const [visited, setVisited] = useState(false)
    
    const btnHandle = ()=>{
      setVisited(!visited);
    }



  return (
    <div>
      <div className={`card bg-base-100 shadow-xl ${visited && 'bg-cyan-400' }`}>
        <figure className ="px-10 pt-10">
          <img
            src={flags.png}
            alt="Shoes"
            className ="rounded-xl h-48"
          />
        </figure>
        <div className ="card-body items-center text-center">
          <h2 className ={`card-title text-3xl font-bold ${visited && ' text-red-500'}`}>{name.common}</h2>
          <p>{name.official.slice(0, 25)}</p>
          <p>population: {population}</p>
          <p>subregion: {subregion}</p>
          <div className ="flex gap-3 items-center">
            {
              visited? 'I am visited' : 'visit'
            }
            <button onClick={btnHandle} className ="btn">{visited? 'Done✔️' : 'Please'  }</button>
          </div>
          <div className="flex gap-5">
            <button onClick={() => markName(details,details.flags)} className ="btn">Mark✅</button>
            <button onClick={() => markFlag(details.flags.png)} className ="btn">Flag</button>

          </div>
        </div>
      </div>
    </div>
  );
}
