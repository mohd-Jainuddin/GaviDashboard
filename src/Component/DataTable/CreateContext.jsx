import React, { useState, useEffect, createContext } from "react";
import axios from "axios";


const createContextApi = createContext();

function ContextApi({ children }) {
  const [coviddata, setCovidData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  useEffect(() => {
      setLoading(true)
    axios
      .get(
        `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/`,
        {
          headers: {
            "X-RapidAPI-Key":
              "8c0c5645f4msh17b4e89de7b874ap10eb20jsn3e95f4dad049",
            "X-RapidAPI-Host":
              "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
          },
        }
      )
      .then(response => {
        setCovidData([...response.data]);
        setLoading(false)
      })
      .catch(function (error) {
        setError("Something went wrong");
      });
  }, []);

  return (
    <>
      <createContextApi.Provider value={{ coviddata}}>
        {children}
      </createContextApi.Provider>
    </>
  );
}

export {ContextApi,createContextApi}