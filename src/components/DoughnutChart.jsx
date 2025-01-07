import React, { useContext, useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { MoneyOpsContext } from '../context/MoneyOpsConext';
ChartJS.register(ArcElement, Tooltip);

export const DoughnutChart = ({title}) => {

  const {budget} = useContext(MoneyOpsContext);
  const {needs, wants, savings, total} = budget.budget;
  const expenseHist = budget.expensesHist;
   
  useEffect(() => {
    setDonnutData()
  },[budget]);

  const [totalSpent, setTotalSpent] = useState(0)

  const setDonnutData = () => {
    console.log(budget.need)
    expenseHist.forEach(spend => {
      setTotalSpent(spend.amount + totalSpent)
    });
  }

    const data = {
        labels: ['Needs', 'Wants', 'Savings'],
        datasets: [
          {
            data: [needs.left, wants.left, savings.left],
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
                <p className='m-0'>Total budget: ${total}</p>
            </div>

            <div className='d-flex w-100 justify-content-center'>
                <div className='w-50 h-50'>
                    <Doughnut data={data} options={options}/>
                </div>
            </div>
            

            <div className='d-flex flex-row flex-wrap justify-content-between align-content-center'>
                <p className='m-0'>Total spent: ${}</p>
                <p className='m-0' style={{color:"green"}}>Remaining: ${}</p>
            </div>
        </div>
    )
}
