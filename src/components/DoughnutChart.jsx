import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);

export const DoughnutChart = ({title}) => {
   
    const data = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            data: [30, 50, 20],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            
          },
        ],
      };
    
      const options = {
        // You can customize chart options here
      };

    return (
        <div className=''>
            <div className='d-flex flex-row flex-wrap justify-content-between align-content-center'>
                <p className='m-0'>Budget: $1000</p>
                <button className='bg-transparent border-0' style={{color:"blue"}}>Edit</button>
            </div>

            <div className='d-flex w-100 justify-content-center'>
                <div className='w-50 h-50'>
                    <Doughnut data={data} options={options}/>
                </div>
            </div>
            

            <div className='d-flex flex-row flex-wrap justify-content-between align-content-center'>
                <p className='m-0'>Spent: $245</p>
                <p className='m-0' style={{color:"green"}}>Remaining: $755</p>
            </div>
        </div>
    )
}
