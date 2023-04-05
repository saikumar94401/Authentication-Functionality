import './index.css'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const logoutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <button type="button" onClick={logoutButton}>
      Logout
    </button>
  )
}
export default withRouter(LogoutButton)
