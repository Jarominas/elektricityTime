import moment from 'moment'

const apiUrl = 'https://dashboard.elering.ee/api'

export async function getElectricityPrice(selectedDay) {
      const start = moment().subtract('10', 'hours').toISOString()
      const end = moment().add(selectedDay, 'days').toISOString()

      const params = new URLSearchParams({
            start,
            end,
      })

      const response = await fetch(`${apiUrl}/nps/price?${params}`)
      return await response.json()
}
export async function getGasPrice(selectedDay) {
      const start = moment().subtract(selectedDay, 'month').toISOString()
      const end = moment().toISOString()

      const params = new URLSearchParams({
            start,
            end,
      })

      const response = await fetch(`${apiUrl}/gas-trade?${params}`)
      return await response.json()
}
