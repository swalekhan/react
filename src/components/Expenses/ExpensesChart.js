import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
   let chartPoints = [
    {label:"jan", value:0},
    {label:"feb", value:0},
    {label:"mar", value:0},
    {label:"apr", value:0},
    {label:"may", value:0},
    {label:"jun", value:0},
    {label:"jul", value:0},
    {label:"aug", value:0},
    {label:"sep", value:0},
    {label:"oct", value:0},
    {label:"nov", value:0},
    {label:"dec", value:0},
   ]

   for(let expense of props.expenses){
    let expenseMonth = expense.date.getMonth();
    chartPoints[expenseMonth].value += expense.amount;
   }

   return <div>
       <Chart dataPoints = {chartPoints}/>
   </div>
}
export default ExpensesChart;