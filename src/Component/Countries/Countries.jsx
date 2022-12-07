import { React, useState, useEffect } from "react";
import axios from "axios";
import "./Countries.css";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  Legend,
  Bar,
  ComposedChart,
  Line,
  BarChart,
} from "recharts";

export const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(`https://disease.sh/v3/covid-19/countries`).then(response => {
      setCountries([...response.data]);
    });
  }, []);

  return (
    <>
      <h1 className="country_data_info">COUNTRY WISE COVID DATA</h1>
      <div className="graph_container1">
        <div>
          <AreaChart
            width={500}
            height={400}
            data={countries}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="country" />
            <YAxis width={90} allowDataOverflow="true" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="active"
              stroke="#8884d8"
              fillOpacity={0.8}
              fill="#e1e5f2"
            />

            <Area
              type="monotone"
              dataKey="recovered"
              stroke="#82ca9d"
              fillOpacity={0.3}
              fill="#bfdbf7"
            />
          </AreaChart>

          <AreaChart
            width={500}
            height={400}
            data={countries}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis width={90} allowDataOverflow="true" />
            <CartesianGrid />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="todayDeaths"
              stroke="#8884d8"
              fillOpacity={0.8}
              fill="#e1e5f2"
            />

            <Area
              type="monotone"
              dataKey="todayCases"
              stroke="#82ca9d"
              fillOpacity={0.3}
              fill="#bfdbf7"
            />
          </AreaChart>
        </div>
        <div>
          <BarChart width={500} height={400} data={countries}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis allowDataOverflow="true" width={90} />
            <Tooltip />
            <Legend />
            <Bar dataKey="population" fill="#8884d8" />
            <Bar dataKey="recovered" fill="#82ca9d" />
          </BarChart>

          <ComposedChart width={500} height={400} data={countries}>
            <XAxis dataKey="country" />
            <YAxis width={120} allowDataOverflow="true" />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="todayCases" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="todayDeaths" stroke="#ff7300" />
          </ComposedChart>
        </div>
      </div>
    </>
  );
};