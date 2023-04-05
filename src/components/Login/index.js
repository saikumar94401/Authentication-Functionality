import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  authorizeUser = async () => {
    const username = 'rahul'
    const password = 'rahul@2021'
    const user = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const jwtToken = data.jwt_token
    console.log(jwtToken)
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="app-container">
        <div className="login-container">
          <h1 className="login-heading">Please Login</h1>
          <button
            type="button"
            className="login-button"
            onClick={this.authorizeUser}
          >
            Login with Sample Creds
          </button>
        </div>
      </div>
    )
  }
}
export default Login
