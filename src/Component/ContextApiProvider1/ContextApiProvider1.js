import React, { useState, useEffect, createContext } from "react";

import axios from "axios";

//  Providing Api data
const createContextApi = createContext();

function ContextApiProvider1({ children }) {
  const [coviddata, setCovidData] = useState([]);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
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
      })
      .catch(function (error) {
        setError("Something went wrong");
        error && setShowToast(true);
      });
  }, []);

  return (
    <>
      <createContextApi.Provider
        value={{ coviddata, error, showToast, setCovidData }}>
        {children}
      </createContextApi.Provider>
    </>
  );
}

export { createContextApi, ContextApiProvider1 };
