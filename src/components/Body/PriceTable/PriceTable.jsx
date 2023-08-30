import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import moment from 'moment'

const PriceTable = ({ electricityPrice }) => {
      const data = electricityPrice?.ee.map((priceEE, index) => {
            return {
                  ee: priceEE,
                  lv: electricityPrice?.lv[index],
                  fi: electricityPrice?.fi[index],
                  lt: electricityPrice?.lt[index],
            }
      })
      const now = moment().format('HH')
      const rowIndex = data.findIndex(({ ee }) => moment.unix(ee.timestamp).format('HH') === now)
      console.log(rowIndex)
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
                              {data.map(({ ee, lt, lv, fi }, index) => (
                                    <tr key={index}>
                                          <td className={index === rowIndex ? 'active-row' : ''}>
                                                {moment.unix(ee.timestamp).format('DD.MM.YYYY HH:mm:ss')}
                                          </td>
                                          <td className={index === rowIndex ? 'active-row' : ''}>{ee.price}</td>
                                          <td className={index === rowIndex ? 'active-row' : ''}>{fi.price}</td>
                                          <td className={index === rowIndex ? 'active-row' : ''}>{lv.price}</td>
                                          <td className={index === rowIndex ? 'active-row' : ''}>{lt.price}</td>
                                    </tr>
                              ))}
                        </tbody>
                  </Table>
            </Container>
      )
}

export default PriceTable
