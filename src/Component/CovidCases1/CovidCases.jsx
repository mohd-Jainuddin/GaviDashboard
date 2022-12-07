import axios from "axios";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";

import '../CovidCases1/CovidCases'

const CustomizedLabel = ({ x, y, stroke, value }) => {
  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

const CustomizedAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)">
        {payload.value}
      </text>
    </g>
  );
};

export function CovidCases(){
  const [obj, setObj] = useState([
    {
      country: "",
      activePerOneMillion: "",
      casesPerOneMillion: "",
      recovered: "",
    },
  ]);

  useEffect(() => {
    const CovidCasesData = async () => {
      await axios.get("https://disease.sh/v3/covid-19/countries").then(res => {
        setObj(res.data);
      });
    };
    CovidCasesData();
  }, []);

  return (
    <>
    <h1 className=".heading_count">All COUNTRIES DATA</h1>
      <div className="main_chart_container ">
        <LineChart
          width={850}
          height={530}
          data={obj}
          margin={{
            top: 20,
            bottom: 10,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" height={60} tick={<CustomizedAxisTick />} />
          <YAxis  width={100}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="activePerOneMillion" stroke="#0000FF">
            <LabelList content={<CustomizedLabel />} />
          </Line>
          <Line type="monotone" dataKey="casesPerOneMillion" stroke="#82CA9D" />
          <Line type="monotone" dataKey="recovered" stroke="#FF0000" />
        </LineChart>
      </div>
    </>
  );
}