import './signIn.css'
import { useSelector } from 'react-redux'
import { GoogleLoginButton } from '../../../store/types/GoogleLogin'
import { RootState } from '../../../store/reducers/storeReducers'

function LoginWithGoogle() {
  const token = useSelector((state: RootState) => state.googleLogin.token)

  return (
    <div className="google_login">
      {token ? (
        <div>Logged in with Google!</div>
      ) : (
        <div>
          <GoogleLoginButton />
        </div>
      )}
    </div>
  )
}

export default LoginWithGoogle
