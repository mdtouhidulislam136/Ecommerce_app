import React from 'react'
import { useDispatch } from 'react-redux'
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { GoogleLoginSuccess, GoogleLogout } from '../actions/googleLoginAction'

const CLIENT_ID = '61750531404-a7agf73p5qn93o1a2aoin83fe89t6u70.apps.googleusercontent.com'

export const GoogleLoginButton: React.FC = () => {
  const dispatch = useDispatch()

  const handleSuccess = (response: GoogleLoginResponseOffline | GoogleLoginResponse) => {
    if ('tokenId' in response) {
      dispatch(GoogleLoginSuccess({ token: response.tokenId }))
    } else {
      console.error('Login was not successful: ', response)
    }
  }

  const handleFailure = () => {
    dispatch(GoogleLogout())
  }

  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      buttonText="Login with Google"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}></GoogleLogin>
  )
}
