// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class NotFound extends Component {
  state = {isLoading: true}

  notFoundContainer = () => (
    <div className="not-found-container">
      <h2 className="heading">Page Not Found</h2>
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="div-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.notFoundContainer()
        )}
      </div>
    )
  }
}

export default NotFound
