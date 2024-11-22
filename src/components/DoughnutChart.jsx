import React from 'react'
import { Doughnut } from 'react-chartjs-2';

export const DoughnutChart = () => {
   
    return (
        <>
            <Doughnut 
                data={{
                    labels: ["A", "B"],
                    datasets: [
                        {
                            label: "cosa1",
                            data:[100, 200],
                            backgroundColor: ["black", "white"],
                            borderRadius:5
                        }
                    ]
                }}
            ></Doughnut>
        </>
    )
}
