import './index.css'
import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationDetails} = props
  const {vaccinationByAge} = vaccinationDetails
  return (
    <div className="section-bg">
      <h1 className="section-heading">Vaccination By Age</h1>
      <ResponsiveContainer
        width="100%"
        height={300}
        className="pie-chart-container"
      >
        <PieChart>
          <Pie
            data={vaccinationByAge}
            startAngle={0}
            cx="70%"
            cy="40%"
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
            margin={{bottom: 5, left: 'auto', right: 'auto'}}
          >
            <Cell name="Male" fill="#2cc6c6" />
            <Cell name="Female" fill="#64c2a6 " />
            <Cell name="Others" fill="#a3df9f" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="middle"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
