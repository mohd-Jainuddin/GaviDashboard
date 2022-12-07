import React, { useEffect, useState } from "react";
import axios from "axios";

export function Phase1() {
  const [phase1, setPhase1] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines-phase-i`,
        {
          headers: {
            "X-RapidAPI-Key":
              "8c0c5645f4msh17b4e89de7b874ap10eb20jsn3e95f4dad049",
            "X-RapidAPI-Host":
              "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
          },
        }
      )
      .then(res => {
        setPhase1([...res.data]);
      });
  }, []);

  return (
    <>
      <div className="all1">
        <h1>All Vaccines </h1>
        <div className="heading_vaccine1">
          <h3 className="all_h31 Co1">Company ▼</h3>
          <h3 className="all_h31 pha1">Phase ▼</h3>
          <h3 className="all_h131 Cat1">Category ▼</h3>
          <h3 className="all_h131 Cat1">Description▼</h3>
        </div>
        <table className="All_vaccine_sidebar1">
          <div className="vaccine_data_body">
            <tbody>
              {phase1.map(
                ({ id, developerResearcher, phase, category, description }) => {
                  return (
                    <tr key={id} className="vaccine_details_container1">
                      <td className="developerResearcher_data1">
                        {developerResearcher}
                      </td>
                      <td className="phase_data1">{phase}</td>
                      <td className="category_data1">{category}</td>
                      <td className="description_data1">{description}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </div>
        </table>
      </div>
    </>
  );
}
