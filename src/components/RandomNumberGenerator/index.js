// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0, isHighLighted: true}

  randomNumberGenerator = () => {
    setTimeout(() => {
      this.setState({isHighLighted: false})
    }, 100)

    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState({randomNumber, isHighLighted: true})
  }

  render() {
    const {randomNumber, isHighLighted} = this.state

    return (
      <div className="background-container">
        <div className="card">
          <h1 className="card-heading">Random Number</h1>
          <p className="card-paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          {isHighLighted ? (
            <button
              className="generate-btn"
              type="button"
              onClick={this.randomNumberGenerator}
            >
              Generate
            </button>
          ) : (
            <button
              className="generate-btn unhighlight"
              type="button"
              onClick={this.randomNumberGenerator}
            >
              Generate
            </button>
          )}
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
