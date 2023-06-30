// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({
        count: prevState.count + 10,
      }))
    }
  }

  applyBreak = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading-1">SPEEDOMETER</h1>
        <img
          className="img-class"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h2 className="heading-2">Speed is {count}mph</h2>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph </p>
        <div>
          <button
            type="button"
            className="accelerate"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="applybreak"
            onClick={this.applyBreak}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
