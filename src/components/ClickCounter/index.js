// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickMe = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="background-container">
        <h1 style={{color: ' #2d3a35'}}>
          The Button has been clicked{' '}
          <span style={{color: ' #c20a72'}}>{count}</span> times
        </h1>
        <p style={{color: ' #2d3a35'}}>
          Click the button to increase the count!
        </p>
        <div>
          <button
            style={{'background-color': ' #007bff', color: ' #ffffff'}}
            className="button"
            type="button"
            onClick={this.onClickMe}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
