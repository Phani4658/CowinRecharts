import './index.css'
import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationDetails} = props
  const {vaccinationByGender} = vaccinationDetails
  return (
    <div className="section-bg">
      <h1 className="section-heading">Vaccination By Gender</h1>
      <ResponsiveContainer
        width="100%"
        height={300}
        className="pie-chart-container"
      >
        <PieChart>
          <Pie
            data={vaccinationByGender}
            startAngle={0}
            cx="70%"
            cy="40%"
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#2d87bb" />
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

export default VaccinationByGender
