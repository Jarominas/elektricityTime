import Badge from 'react-bootstrap/Badge'
import { NOW_TIMESTAMP } from '../constants'
const PriceInfo = ({ electricityPrice }) => {
      const currentPrice = electricityPrice?.ee.find((item) => item.timestamp === NOW_TIMESTAMP)
      return (
            <>
                  <div>
                        <h2>Price is:</h2>
                        <div className='priceBadge'>
                              {currentPrice?.price < NOW_TIMESTAMP ? (
                                    <Badge bg='success'>Low</Badge>
                              ) : (
                                    <Badge bg='danger'>High</Badge>
                              )}
                        </div>
                  </div>
            </>
      )
}

export default PriceInfo
