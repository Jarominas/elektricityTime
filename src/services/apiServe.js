import moment from 'moment'

const apiUrl = 'https://dashboard.elering.ee/api'

export async function getElectricityPrice({ to, selectedDay, from }) {
      const momentStart = selectedDay ? moment().subtract('10', 'hours') : moment(from).startOf('day')
      const momentEnd = selectedDay ? moment().add(selectedDay, 'days') : moment(to).endOf('day')

      const start = momentStart.toISOString(true)
      const end = momentEnd.toISOString(true)

      const params = new URLSearchParams({
            start,
            end,
      })

      const response = await fetch(`${apiUrl}/nps/price?${params}`)
      return await response.json()
}
export async function getGasPrice({ selectedDay, to, from }) {
      const momentStart = selectedDay ? moment().subtract(selectedDay, 'month') : moment(from).startOf('day')
      const momentEnd = selectedDay ? moment() : moment(to).startOf('day')

      const start = momentStart.toISOString(true)
      const end = momentEnd.toISOString(true)

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
