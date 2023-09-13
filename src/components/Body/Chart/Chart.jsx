import { useState, useEffect } from 'react'
import {
      LineChart,
      ReferenceLine,
      Line,
      XAxis,
      YAxis,
      CartesianGrid,
      Tooltip,
      Legend,
      ResponsiveContainer,
      ReferenceDot,
} from 'recharts'
import moment from 'moment'
import { ELE, NOW_TIMESTAMP, GAS } from '../constants'
import { useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'

const Chart = () => {
      const electricityPrice = useSelector((state) => state.electricityPrice)
      const gasPrice = useSelector((state) => state.gasPrice)
      const activeEnergy = useSelector((state) => state.activeEnergy)
      const [chartData, setChartData] = useState([])
      const [isLoading, setIsLoading] = useState(true)

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
            setChartData(data)
            setIsLoading(false)
      }, [electricityPrice, gasPrice, activeEnergy])
      const nowDataPoint = chartData.find(({ timestamp }) => timestamp === NOW_TIMESTAMP)
      return (
            <div className='chartContainer'>
                  {isLoading ? (
                        <Spinner className='chartSpinner' />
                  ) : (
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
                                    <Tooltip cursor={{ stroke: '#ECF3F4', strokeWidth: 30 }} />
                                    <Legend />
                                    <Line
                                          type='step'
                                          dataKey='price'
                                          stroke='#8884d8'
                                          activeDot={{ stroke: '#20A4F3', strokeWidth: 3, r: 10 }}
                                          strokeWidth={3}
                                          legendType={'circle'}
                                    />
                                    <ReferenceDot
                                          x={nowDataPoint?.interval}
                                          y={nowDataPoint?.price}
                                          r={12}
                                          stroke='#20A4F3'
                                          fill='#e15151'
                                    />
                              </LineChart>
                        </ResponsiveContainer>
                  )}
            </div>
      )
}

export default Chart
