import moment from 'moment'

export const ELE = 'electricity'
export const GAS = 'gas'
export const CHART = 'chart'
export const TABLE = 'table'
export const NOW_TIMESTAMP = moment().startOf('hour').unix()
export const LOW_ELE_PRICE = 120

export const label = {
      [ELE]: 'days',
      [GAS]: 'month',
}

export const DAYS = [
      {
            label,
            value: 1,
      },
      {
            label,
            value: 2,
      },
]
