import React, {useState} from 'react';
import Cookies from 'universal-cookie';

const UserInputComment = props =>{
   const cookies = new Cookies();
   const [inputMsgState, setInputMsgState] = useState('');
   const [errorMsgState, setErrorMsgState] = useState('');
   const [counterState, setCounterState] = useState(0);

   let errContent;

   const submitHandle = (e) => {
      e.preventDefault();
      if(cookies.get('userId') == undefined){
         setErrorMsgState('Please Login First to Post your Message');
         props.showLoginForm();
      }
      if(cookies.get('userId') != undefined){
          fetch('http://localhost:3000/comments',{
             method: 'POST',
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                "time" : new Date(),
                "userDetail": [
                  {
                    "userId": cookies.get('userId'),
                    "username": props.userName,
                    "email": "amitverma551@gmail.com"
                  }
               ],
               "body":inputMsgState,
               "like": 0,
               "dislike": 0,
               "reply": []
             })
          }).then(()=>{
            props.msgPost();
            setInputMsgState('')
          })
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

   if(errorMsgState !="" && !props.showLoginMsg){
      errContent = <div className="cm_post-error">{errorMsgState}</div>
   }

  return(
    <div className="cm_login-comment">
    <div className="cm_post-comment">
       {
          (props.showLoginMsg || cookies.get('userId') != undefined) ? (<div className="cm_Uname-InComment">
               <div className="cm_user_name">
                  <div className="cm_first-letter" style={{backgroundColor: "#ffe1b7"}}>{props.userName && props.userName[0]}
               </div>
               <div className="cm_full-name">{props.userName && props.userName}</div>
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
            <button className={(props.showLoginMsg || cookies.get('userId') != undefined) ? 'cm_msg-submit cmt-active' : 'cm_msg-submit' }>Post</button>
        </form>
    </div>
       {errContent}
    </div>
  )
}

export default UserInputComment;