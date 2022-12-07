import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { createContext } from 'react';

const createHeadarContextApi = createContext();

function HeaderContextApiProvider({children}){
 const [headerData,setHeaderData] = useState([])
 const [error,setError] = useState('')
 const [headerToast,setheaderToast] = useState(false)

 useEffect(()=>{
    axios
      .get(
        `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world`,
        {
          headers: {
            "X-RapidAPI-Key":
              "8c0c5645f4msh17b4e89de7b874ap10eb20jsn3e95f4dad049",
            "X-RapidAPI-Host":
              "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
          },
        }
      )
      .then((response) => {
        setHeaderData([...response.data]);
      })
      .catch(function (error) {
        setError("something went wrong");
        error&&setheaderToast(true)
      });
},[])

 
 return (
   <>
     <div>
     
    <createHeadarContextApi.Provider value={{headerData,error,headerToast}}>
        {children}
    </createHeadarContextApi.Provider>
     </div>
   </>
 );

}
export { HeaderContextApiProvider ,createHeadarContextApi};