import React, {useState} from 'react';
import UserLogin from '../components/UserLogin';
import Cookies from 'universal-cookie';

const UserInputComment = props =>{
   const cookies = new Cookies();
   const [inputMsgState, setInputMsgState] = useState('');
   const [errorMsgState, setErrorMsgState] = useState('');
   const [counterState, setCounterState] = useState(0);
   const [showLogin, setshowLogin] = useState(true);
   const [isloggedIn, setIsloggedIn] = useState(false);
   const [userName, setUserName] = useState('');

   let errContent;

   const submitHandle = (e) => {
      e.preventDefault();
      if(cookies.get('userId') == undefined){
         setErrorMsgState('Please Login First to Post your Message');
         setshowLogin(true)
      }
   }
   const inputHandle = (e) => {
      setInputMsgState(e.target.value);
      const inputVal = e.target.value.length;
      setCounterState(counterState =>{
         if(inputVal === 0){
            return counterState = 0
         }else{
            return counterState + 1
         }
      });
   }

   const checkLogin = (isLogin) =>{
      setIsloggedIn(isLogin.isLoggedIn)
      setUserName(isLogin.name)
   }

   if(errorMsgState && !isloggedIn){
      errContent = <div className="cm_post-error">{errorMsgState}</div>
   }

  return(
    <div className="cm_login-comment">
    <div className="cm_post-comment">
       {
          isloggedIn ? (<div className="cm_Uname-InComment">
               <div className="cm_user_name">
                  <div className="cm_first-letter" style={{backgroundColor: "#ffe1b7"}}>s
               </div>
               <div className="cm_full-name">{userName}</div>
            </div>
          </div>):
         null
       }
       
       <form onSubmit={submitHandle}>
            <textarea onChange={inputHandle} 
            value={inputMsgState} name="elm1" id="txtHindi" className="cm_msg-box" placeholder="Write  a comment....."></textarea>
            <div className="cm_char-count">
            <span className="cm_char">{counterState}</span>
            (Characters)
            </div>
            <button className={(cookies.get('userId') != undefined || isloggedIn) ? 'cm_msg-submit cmt-active' : 'cm_msg-submit' }>Post</button>
        </form>
    </div>
       {errContent}
       <UserLogin />
       {/* {   (showLogin && (!isloggedIn || cookies.get('userId') != undefined)) ? 
           <UserLogin checkUserLogin={checkLogin} />:
           null
       } */}
    </div>
  )
}

export default UserInputComment;