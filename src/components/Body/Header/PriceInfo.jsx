import Badge from 'react-bootstrap/Badge'
import { NOW_TIMESTAMP } from '../constants'
import { useSelector } from 'react-redux'
const PriceInfo = () => {
      const electricityPrice = useSelector((state) => state.electricityPrice)
      const currentPrice = electricityPrice?.ee.find((item) => item.timestamp === NOW_TIMESTAMP)
      return (
            <>
                  <div>
                        <h2>Price is:</h2>
                        <div className='priceBadge'>
                              {currentPrice?.price < 100 ? <Badge bg='success'>Low</Badge> : <Badge bg='danger'>High</Badge>}
                        </div>
                  </div>
            </>
      )
}

export default PriceInfo
