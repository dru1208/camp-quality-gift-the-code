import React, { Component } from "react"
import { retrieveCamperID} from "../../shared/utils"


class CamperProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      camperID: ""
    }
  }

  componentDidMount() {
    this.setState({
      camperID: retrieveCamperID(window.location.pathname)
    }, () => {
      console.log(this.state.camperID)
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.camperID}</div>
      </div>
    )
  }
}

export default CamperProfile