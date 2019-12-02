import React, {useState} from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Cookies from 'universal-cookie';

const FacebookAuth = props =>{
  console.log("facebook Comp")

  const cookies = new Cookies();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');

   const responseFacebook = (res) =>{
      setIsLoggedIn(true);
      setUserId(res.id);
      setUserName(res.name);
      setEmail(res.email);
      setPicture(res.picture);
      cookies.set('userId', res.id, { path: '/' })
    }
      const componentClicked = () =>{
        console.log('clicked');
      }

      // props.checkUserLogin({
      //   isLoggedIn,
      //   userId,
      //   userName,
      //   email,
      //   picture
      // });

      return(
        <FacebookLogin
        appId="527833861398176"
        autoLoad={false}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        render={renderProps => (
            <div onClick={renderProps.onClick} className="cm_login-fb"><span className="cm_login-icon"><svg height="13px" width="13px" enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="M308.3,508.5c-2.5,0.1-4.1,0.3-5.7,0.3c-34.2,0-68.3-0.1-102.5,0.1c-4.8,0-6.1-1.3-6.1-6.1c0.1-79.6,0.1-159.3,0.1-238.9   c0-2.1,0-4.2,0-6.9c-18.6,0-36.7,0-55.1,0c0-28.4,0-56.3,0-85c1.9,0,3.7,0,5.4,0c15,0,30-0.1,45,0.1c3.8,0,4.8-1.1,4.8-4.8   c-0.2-22.3-0.2-44.7,0-67c0.1-15.6,2.6-30.8,9.8-44.9c10.3-19.9,26.6-32.8,47.2-40.8c16.8-6.6,34.5-9,52.3-9.3   c29-0.4,58-0.2,87-0.3c2.7,0,4.9-0.1,4.9,3.7c-0.1,27.5-0.1,55-0.1,82.5c0,0.3-0.1,0.6-0.5,1.9c-1.7,0-3.6,0-5.5,0   c-18,0-36-0.1-54,0c-10.4,0-18.8,4.2-24.1,13.3c-1.6,2.7-2.6,6.2-2.6,9.4c-0.3,17,0,34-0.2,51c0,4,1.2,5.1,5.1,5.1   c25-0.2,50-0.1,75-0.1c2,0,3.9,0,7.3,0c-3.5,28.6-6.9,56.6-10.4,84.9c-26,0-51.3,0-77.1,0C308.3,340.8,308.3,424.4,308.3,508.5z"/></g></svg></span> Facebook</div>
          )}
        />
      )
  }

export default FacebookAuth;