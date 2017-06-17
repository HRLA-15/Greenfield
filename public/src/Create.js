import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class Create extends Component {
  constructor(){
    super()

  }

  render() {
    return (
        <div>
          <div id="topHalf">
            <h2>Create Trip</h2>
            <input id="tripName" type = 'text' placeholder = "Trip name"></input>
          <br></br>
            <textarea name="description" placeholder ="Description Details"></textarea>
          </div>

          <div id="bottomHalf">
            <p>From:</p>
            <input type="date" />
            <p>To:</p>
            <input type="date" />
            <br></br>
            <button className="btn">Invite Friends</button>
            <br></br>
            <button className="donebtn">Done</button>
          </div>
        </div>
    )
  }
}

export default Create