import { useState, useEffect } from 'react'
import { LineChart, ReferenceLine, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import moment from 'moment'
import { ELE, NOW_TIMESTAMP, GAS } from '../constants'

const Chart = ({ electricityPrice, activeEnergy, gasPrice }) => {
      const [chartData, setChartData] = useState([])

      useEffect(() => {
            if (!electricityPrice || !gasPrice) return
            const energy = {
                  [ELE]: {
                        data: electricityPrice.ee,
                        format: 'HH',
                  },
                  [GAS]: {
                        data: gasPrice.common,
                        format: 'DD',
                  },
            }
            const data = energy[activeEnergy].data.map((data) => ({
                  ...data,
                  interval: moment.unix(data.timestamp).format(energy[activeEnergy].format),
            }))
            // console.log('SUPER CHART DATA', data)
            setChartData(data)
      }, [electricityPrice, gasPrice, activeEnergy])
      return (
            <div className='chartContainer'>
                  <ResponsiveContainer width='100%' height='100%'>
                        <LineChart
                              data={chartData}
                              margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                              }}
                        >
                              <CartesianGrid strokeDasharray='3 3' />
                              <XAxis dataKey='interval' />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Line type='monotone' dataKey='price' stroke='#8884d8' activeDot={{ r: 8 }} />
                              <ReferenceLine
                                    x={chartData?.findIndex(({ timestamp }) => timestamp === NOW_TIMESTAMP)}
                                    stroke={'red'}
                              />
                        </LineChart>
                  </ResponsiveContainer>
            </div>
      )
}

export default Chart
