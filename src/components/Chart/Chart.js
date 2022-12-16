import React from "react";
import ChartBar from "./ChartBar";
import './chart.css'
const Chart = (props) =>{
    let dataPointsvalue = props.dataPoints.map(e=>{return e.value});
    console.log(dataPointsvalue)
    let totalMax = Math.max(...dataPointsvalue);
    console.log(totalMax)
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint)=>{
              return  <ChartBar key ={dataPoint.label} value ={dataPoint.value} maxValue ={totalMax} label = {dataPoint.label}/>
                
            })}

        </div>
    )
}

export default Chart;