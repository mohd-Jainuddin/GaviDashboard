import { useContext, useState } from "react";
import { createContextApi } from "../ContextApiProvider1/ContextApiProvider1";

import { ToastContainer, toast } from "react-toastify";
import Button from "@mui/material/Button";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  Legend,
} from "recharts";

import "../CovidGraph/CovidGraph.css";
import "react-toastify/dist/ReactToastify.css";

export function CovidGraph() {
  const { coviddata, error, showToast } = useContext(createContextApi);
  const [iscurrent, setISCurrent] = useState(false);
  const handleCurrentData = () => {
    setISCurrent(!iscurrent);
  };

  return (
    <>
    <div className="graph_container">
      <h1 className="heading_graph">COVID CASES & DEATHS</h1>
      <Button
        className="daily_changes"
        variant="contained"
        onClick={handleCurrentData}>
        Daily Changes
      </Button>
      <div className="Areachart">
        {iscurrent ? (
          <div className="Areachart_1">
            <AreaChart
              width={1000}
              height={560}
              data={coviddata}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <XAxis dataKey="Country" />
              <YAxis width={90} allowDataOverflow="true" dataKey="Population" />
              <CartesianGrid />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="ActiveCases"
                stroke="#8884d8"
                fillOpacity={0.8}
                fill="#e1e5f2"
              />
              <Area
                type="monotone"
                dataKey="TotalTests"
                stroke="#82ca9d"
                fillOpacity={0.3}
                fill="#bfdbf7"
              />
            </AreaChart>
          </div>
        ) : (
          <div className="Areachart_2">
            <AreaChart
              width={1000}
              height={560}
              data={coviddata}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <XAxis allowDataOverflow="true" dataKey="Country" />
              <YAxis width={90} allowDataOverflow="true" dataKey="Population" />
              <CartesianGrid />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="TotalCases"
                stroke="#8884d8"
                fillOpacity={0.6}
                fill="#1f7a8c"
              />
              <Area
                type="monotone"
                dataKey="TotalDeaths"
                stroke="#82ca9d"
                fillOpacity={0.6}
                fill="#bfdbf7"
              />
            </AreaChart>
          </div>
        )}

        {showToast && toast(error) && <ToastContainer theme="dark" />}
      </div>
    </div>
    </>
  );
}
