import React from "react";

import { Chart } from "react-google-charts";
import './dash.css'

export const data1 = [
    ["Ano", "Dados"],
    ["2014", 1000 ],
    ["2015", 1170],
    ["2016", 660],
    ["2017", 1030],
  ];

export const data = [
  [
    "Dados",
    "Dados"
  ],
  [1, 37.8],
  [2, 30.9],
  [3, 25.4],
  [4, 11.7],
  [5, 11.9],
  [6, 8.8],
  [7, 7.6],
  [8, 12.3],
  [9, 16.9],
  [10, 12.8],
  [11, 5.3],
  [12, 6.6],
  [13, 4.8],
  [14, 4.2],
];  
export const options1 = {
  chart: {
    title: "Dados",
    subtitle: "Dados",
  },
};
export const options = {
  chart: {
    title: "Dados",
    subtitle: "subtitle",
  },
};

export const data3 = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];

function Dash(){
    return(
        <div className="main">
          <div className="bar">
              <p className="laccan">LACCAN</p>
              <div className="configsair">
                <a className="sair">SAIR</a>
              </div>
          </div>
          <div>

          <div className="sep">

            <div className="graphic">
              <div className="row">
              <Chart
                  chartType="Bar"
                  width="60%"
                  height="400px"
                  data={data1}
                  options={options1}
              />
              <Chart
              chartEvents={[
                {
                  eventName: "select",
                  callback: ({ chartWrapper }) => {
                    const chart = chartWrapper.getChart();
                    const selection = chart.getSelection();
                    if (selection.length === 0) return;
                    const region = data[selection[0].row + 1];
                    console.log("Selected : " + region);
                  },
                },
              ]}
              chartType="GeoChart"
              width="55%"
              height="400px"
              data={data3}
              />
              </div>

              <Chart
                chartType="Line"
                width="90%"
                height="500px"
                options={options}
                data={data}
                
              />
            </div>

            <div className="lat">
              <button>Brazil</button>
              <button>USA</button>
              <button>Canada</button>
              <button>RU</button>
              
            </div>


          </div>

            
            
        </div>
        </div>
    );
}

export default Dash;