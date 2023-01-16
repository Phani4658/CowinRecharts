import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const apiStatusConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {vaccinationDetails: {}, apiStatus: apiStatusConstants.loading}

  componentDidMount() {
    this.getVaccinationDetails()
  }

  renderFailureView = () => (
    <div className="bg-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <h1 className="website-name">Co-WIN</h1>
      </div>
      <h1 className="main-heading">CoWIN Vaccination in India</h1>
      <div className="failure-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="failure view"
          className="failure-img"
        />
        <h1 className="failure-msg">Something Went Wrong</h1>
      </div>
    </div>
  )

  renderLoadingView = () => (
    <div className="bg-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <h1 className="website-name">Co-WIN</h1>
      </div>
      <h1 className="main-heading">CoWIN Vaccination in India</h1>
      <div data-testid="loader" className="loader-container">
        <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
      </div>
    </div>
  )

  getVaccinationDetails = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const modifiedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      this.setState({
        vaccinationDetails: modifiedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {vaccinationDetails} = this.state
    const {last7DaysVaccination} = vaccinationDetails
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <h1 className="website-name">Co-WIN</h1>
        </div>
        <h1 className="main-heading">CoWIN Vaccination in India</h1>
        <VaccinationCoverage data={last7DaysVaccination} />
        <VaccinationByGender vaccinationDetails={vaccinationDetails} />
        <VaccinationByAge vaccinationDetails={vaccinationDetails} />
      </div>
    )
  }

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }
}

export default CowinDashboard
