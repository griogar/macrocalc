import React, { useState } from 'react';

import FacebookLogin from 'react-facebook-login';
import { Calculator } from './Components/Calculator';
import { Card, Image } from 'react-bootstrap';
import './App.css'

const App = () => {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    setData(response);
    setPicture(response.picture.data.url);

    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  return (
    <div class="container">
          {!login &&
            <FacebookLogin
              appId="909951962500614"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook" />
          }
        {login &&
          <Calculator />
        }
    </div>
  );
}

export default App;