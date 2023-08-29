import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import moment from 'moment'

const PriceTable = ({ electricityPrice }) => {
      const { ee, fi, lv, lt } = electricityPrice

      console.log(ee)
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
                              {ee.map((data, index) => (
                                    <tr key={index}>
                                          <td>
                                                {
                                                      (data.timestamp = moment
                                                            .unix(
                                                                  data.timestamp
                                                            )
                                                            .format(
                                                                  'MM/DD/YYYY'
                                                            ))
                                                }
                                          </td>
                                          <td>
                                                {ee[index]
                                                      ? ee[index].price + ' €'
                                                      : ''}
                                          </td>
                                          <td>
                                                {lv[index]
                                                      ? lv[index].price + ' €'
                                                      : ''}
                                          </td>
                                          <td>
                                                {lt[index]
                                                      ? lt[index].price + ' €'
                                                      : ''}
                                          </td>
                                          <td>
                                                {fi[index]
                                                      ? fi[index].price + ' €'
                                                      : ''}
                                          </td>
                                    </tr>
                              ))}
                        </tbody>
                  </Table>
            </Container>
      )
}

export default PriceTable
