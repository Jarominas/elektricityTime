import moment from 'moment'

const Price = ({ electricityPrice }) => {
      if (!electricityPrice) {
            return <h2>Cannot get Price</h2>
      }
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
      console.log(data)
      return (
            <>
                  <div className='price'>
                        {data.map(({ ee }, index) => {
                              return <h2 key={index}>{index === rowIndex ? ee.price : ''}</h2>
                        })}
                  </div>
                  <p>sents/kw</p>
            </>
      )
}

export default Price
