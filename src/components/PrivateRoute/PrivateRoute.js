// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
import AuthService from './Services/AuthService'
import { Redirect, Route } from 'react-router-dom'


const PrivateRoute = ({ component: Component, ...rest }) => {

  // Add your own authentication on the below line.
  FB.getLoginStatus(function(response) {
    if (response.status === "connected") {
      let uid = response.authResponse.userID
      let isLoggedIn = true
    }
    else {
      let isLoggedIn = false
    }
  });
  const isLoggedIn = AuthService.isLoggedIn() 
  

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute