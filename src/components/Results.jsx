import React from 'react'
import {calculateResults, formatter} from '../components/Investments'


const Results = ({input}) => {
    const realData = calculateResults(input)
    const initialInvestment = realData[0].valueEndOfYear -realData[0].interest - realData[0].annualInvestment
    return (
        <div className='w-[100%]'>
            <table className='w-full mt-10 text-blue-600 border-red-200 '>
                <thead className='text-white font-bold text-center  '>
                    <tr className=' mt-10'>
                        <td>Year</td>
                        <td>Investment</td>
                        <td >Interest <br /> (Year)</td>
                        <td>Total <br />Intrests</td>
                        <td>Invested <br />Capital</td>
                    </tr>
                </thead>
              
                <tbody className=''>
                   {realData.map((data, index) => {
                    const totalinterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment
                    const capitalInvestment = data.valueEndOfYear - data.interest
                    return  <tr key={index}>
                    <td>{data.year}</td>
                    <td>{formatter.format(data.valueEndOfYear)}</td>
                    <td>{formatter.format(data.interest)}</td>
                    <td>{formatter.format(totalinterest)}</td>
                    <td>{formatter.format(capitalInvestment)}</td>
                </tr>
                   })}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Results