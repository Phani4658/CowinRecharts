import './index.css'
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  Bar,
  YAxis,
  Legend,
} from 'recharts'

const VaccinationCoverage = props => {
  const {data} = props
  const vaccinationDetails = data.map(details => ({
    vaccineDate: details.vaccine_date,
    dose1: details.dose_1,
    dose2: details.dose_2,
  }))

  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number
  }
  return (
    <div className="section-bg">
      <h1 className="section-heading">Vaccination Coverage</h1>
      <ResponsiveContainer
        className="bar-chart-container"
        width="100%"
        height={500}
      >
        <BarChart data={vaccinationDetails} margin={{top: 5}}>
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tick={{strokeWidth: 1, stroke: 'gray'}}
            tickFormatter={dataFormatter}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar
            dataKey="dose1"
            name="Dose1"
            fill="#5a8dee"
            barSize="20%"
            className="bar"
          />
          <Bar
            dataKey="dose2"
            name="Dose2"
            fill="#f54394"
            barSize="20%"
            className="bar"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
