import React from 'react'
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import './Login.css';
 
const responseFacebook = (response) => {
  console.log(response);
}
 

export default function Login() {
  return (
    <div className="fb-login">
      <FacebookLogin
        appId="336093518071536"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook} 
      />
    </div>
  )
}
