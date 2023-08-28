import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { priceData } from './priceData'

const PriceTable = ({ electricityPrice }) => {
      return (
            <Container className='priceTable'>
                  <Table striped bordered hover size='sm'>
                        <thead>
                              <tr>
                                    <th>Date</th>
                                    <th>Price in Estonia</th>
                                    <th>Price in Latvia</th>
                                    <th>Price in Finland</th>
                              </tr>
                        </thead>
                        <tbody>
                              {priceData.map((data, index) => (
                                    <tr key={index}>
                                          <td>{data.date}</td>
                                          <td>{data.countries.est} €</td>
                                          <td>{data.countries.lt} €</td>
                                          <td>{data.countries.fin} €</td>
                                    </tr>
                              ))}
                        </tbody>
                  </Table>
            </Container>
      )
}

export default PriceTable
