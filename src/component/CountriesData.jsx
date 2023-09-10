import { useEffect, useState } from "react"
import Country from "./Country"
import { list } from "postcss"

export default function CountriesData(){
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(response => setData(response))
    },[])

    const [countryName, setCountryName] = useState([]);
    const [flag , setFlag] = useState([]);

    const markName = (details,flags) =>{
        console.log(flags);
        const newCountryName = [...countryName, details];
        const nesFlag = [...flag, flags]
        setFlag(nesFlag)
        setCountryName(newCountryName)

    }
    const [countryFlag , setCountryFlag] = useState([]);

    const markFlag = (flag) =>{
        const newCountryFlag = [...countryFlag, flag]
        setCountryFlag(newCountryFlag)
    }

    


    return(
        <div className="container mx-auto flex flex-col-reverse lg:flex-row gap-5 my-5 px-4 md:px-4 lg:px-0">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                data.map((Element, index) => (<Country key={index} details={Element} markName={markName} markFlag={markFlag}></Country>))
            }
            </div>

            <div className="flex flex-col items-center lg:w-[600px] h-fit py-5 text-center border border-gray-300 rounded-lg space-y-2">

            <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">Visited country name</h1>

            <div>
                <h1 className="text-xl font-bold">visited: {countryName.length}</h1>
                <div className=" flex items-center gap-3">
                    <div>
                    {
                        countryName.map(data => (<li className="my-2">{data.name.common}</li>))
                    }
                    </div>
                    <div>
                    {
                        flag.map((flag, index) => <img key={index} className="my-2 h-5 w-fit" src={flag.png}></img>)
                    }
                    </div>

                </div>

                    
            </div>
            <div className="flex flex-col gap-3 w-fit p-2 rounded-lg items-center ">
            <h1 className="text-xl font-bold">VitedFlag: {countryFlag.length}</h1>
                {
                    countryFlag.map((flag, index) => <img key={index} className="h-5" src={flag}></img>)
                }
            </div>

            </div>

        </div>
    )
}