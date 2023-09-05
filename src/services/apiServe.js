import moment from 'moment'

const apiUrl = 'https://dashboard.elering.ee/api'

export async function getElectricityPrice({ to, selectedDay, from }) {
      const momentStart = selectedDay ? moment().subtract('10', 'hours') : moment(from)
      const momentEnd = selectedDay ? moment().add(selectedDay, 'days') : moment(to)

      const start = momentStart.toISOString()
      const end = momentEnd.toISOString()

      const params = new URLSearchParams({
            start,
            end,
      })

      const response = await fetch(`${apiUrl}/nps/price?${params}`)
      return await response.json()
}
export async function getGasPrice({ selectedDay, to, from }) {
      const momentStart = selectedDay ? moment().subtract(selectedDay, 'month') : moment(from)
      const momentEnd = selectedDay ? moment() : moment(to)

      const start = momentStart.toISOString()
      const end = momentEnd.toISOString()

      const params = new URLSearchParams({
            start,
            end,
      })

      const response = await fetch(`${apiUrl}/gas-trade?${params}`)
      return await response.json()
}

export async function getLatestEstGasPrice() {
      const country = 'EE'
      const response = await fetch(`${apiUrl}/gas-trade/${country}/latest`)
      return await response.json()
}
