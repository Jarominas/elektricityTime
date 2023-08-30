import moment from 'moment'
import Badge from 'react-bootstrap/Badge'

const PriceInfo = ({ electricityPrice }) => {
      if (!electricityPrice) {
            return <h2>Cannot get Price Info</h2>
      }
      const data = electricityPrice?.ee.map((priceEE) => {
            return {
                  ee: priceEE,
            }
      })
      console.log(data.price)

      return (
            <>
                  <div>
                        <h2>Price is:</h2>
                        <div className='priceBadge'>
                              {data.price < 100 ? <Badge bg='success'>Low</Badge> : <Badge bg='danger'>High</Badge>}
                        </div>
                  </div>
            </>
      )
}

export default PriceInfo
