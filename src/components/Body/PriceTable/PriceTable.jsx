import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { NOW_TIMESTAMP, GAS, ELE } from '../constants'

const PriceTable = () => {
      const electricityPrice = useSelector((state) => state.electricityPrice)
      const gasPrice = useSelector((state) => state.gasPrice)
      const activeEnergy = useSelector((state) => state.activeEnergy)
      const [tableData, setTableData] = useState([])

      useEffect(() => {
            if (!electricityPrice || !gasPrice) {
                  console.log('No data in PriceTable')
                  return
            }
            const energy = {
                  [ELE]: {
                        data: electricityPrice,
                        format: 'HH',
                        main: 'ee',
                  },
                  [GAS]: {
                        data: gasPrice,
                        format: 'DD',
                        main: 'common',
                  },
            }
            const mainData = energy[activeEnergy].data
            const main = energy[activeEnergy].main

            const data = mainData[main].map((priceEE, index) => {
                  return {
                        ee: energy[activeEnergy].data.ee[index],
                        lv: energy[activeEnergy].data.lv[index],
                        fi: energy[activeEnergy].data.fi[index],
                        lt: energy[activeEnergy].data.lt[index],
                        date: energy[activeEnergy].data[energy[activeEnergy].main][index],
                  }
            })
            setTableData(data)
      }, [electricityPrice, gasPrice, activeEnergy])
      return (
            <Container className='priceTable'>
                  <Table striped bordered hover size='sm'>
                        <thead>
                              <tr>
                                    <th>Date</th>
                                    <th>Price in Estonia</th>
                                    <th>Price in Latvia</th>
                                    <th>Price in Lithuania</th>
                                    <th>Price in Finland</th>
                              </tr>
                        </thead>
                        <tbody>
                              {tableData.map(({ ee, lt, lv, fi, date }, index) => (
                                    <tr key={index} className={NOW_TIMESTAMP === ee?.timestamp ? 'active-row' : ''}>
                                          <td>{moment.unix(date?.timestamp).format('DD.MM.YYYY HH:mm:ss')}</td>
                                          <td>{ee?.price}</td>
                                          <td>{fi?.price}</td>
                                          <td>{lv?.price}</td>
                                          <td>{lt?.price}</td>
                                    </tr>
                              ))}
                        </tbody>
                  </Table>
            </Container>
      )
}

export default PriceTable
