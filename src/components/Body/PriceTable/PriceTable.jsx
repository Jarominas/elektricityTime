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
      const now = moment().format('DD HH')
      const rowIndex = data.findIndex(({ ee }) => moment.unix(ee.timestamp).format('DD HH') === now)
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
                                    <tr key={index} className={index === rowIndex ? 'active-row' : ''}>
                                          <td>{moment.unix(ee.timestamp).format('DD.MM.YYYY HH:mm:ss')}</td>
                                          <td>{ee.price}</td>
                                          <td>{fi.price}</td>
                                          <td>{lv.price}</td>
                                          <td>{lt.price}</td>
                                    </tr>
                              ))}
                        </tbody>
                  </Table>
            </Container>
      )
}

export default PriceTable
