import React, {Fragment, useState, useEffect} from 'react';
import UserInputComment from '../components/UserInputComment';
import UserLogin from '../components/UserLogin';
import Cookies from 'universal-cookie';

const WriteComment = React.memo(props =>{
    const [isloggedIn, setIsloggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [showLogin, setshowLogin] = useState(false);
    const [showMsgBox, setShowMsgBox] = useState(false);
    const [updateMsg, setUpdateMsg] = useState(false);
    const cookies = new Cookies();
    const  msgData = props.msgData;
    const uname = msgData[0] && msgData[0].userDetail[0].username;
    const replyMsg = msgData[0] && msgData[0].reply;
    let reply = 0;

    const checkLogin = (isLogin) =>{
        setIsloggedIn(isLogin.isLoggedIn)
        setUserName(uname)
     }

    const showLoginForm = () => {
        setshowLogin(true);
    }

    const showMsgBoxfunc = () => {
        setShowMsgBox(true);
    }

    const msgPostfunc = () => {
        setUpdateMsg(true)
    }

   if(cookies.get('userId') != undefined){
   }

    return (
        <Fragment>
            <div className="cm_write-comment">
                <div className="cm_comment-count">
                    <div className="cm_count-item">All Comments <span>({msgData.length})</span></div>
                    <div className="cm_count-item">Replies <span>({replyMsg && replyMsg.length})</span></div>
                </div>
                <div className="cm_typeIn">
                <span className="cm_typeIn-txt">Write in:</span>
                    <label className="cm_switch">
                        <input className="cm_switch-input" type="checkbox" />
                        <span className="cm_switch-label" data-on="English" data-off="Hindi"></span> 
                        <span className="cm_switch-handle"></span> 
                    </label>
                </div>
                { !showMsgBox && !isloggedIn && cookies.get('userId') == undefined ?
                        <div className="cm_be-first has-comments">
                        <div className="cm_dummy-input">
                                <div onClick={showMsgBoxfunc} className="cm_click-expend">
                                <div className="cm_click-expend-inner">
                                    <div className="cm_user-icon">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="541.375px" height="446.576px" viewBox="35.313 172.718 541.375 446.576"enableBackground="new 35.313 172.718 541.375 446.576"><g><path fill="#C2C1C1" d="M576.688,619.294c0-0.795-0.135-1.591-0.258-2.398c-1.224-96.562-75.043-175.607-169.426-184.91c-27.54,22.437-62.632,35.949-100.857,35.949c-38.213,0-73.33-13.513-100.857-35.985c-95.398,9.217-169.977,89.535-169.977,187.345h0.159"/><path fill="#C2C1C1" d="M306.147,443.332c74.615,0,135.313-60.698,135.313-135.301c0-74.615-60.698-135.313-135.313-135.313s-135.301,60.698-135.301,135.313C170.846,382.634,231.531,443.332,306.147,443.332z"/></g></svg>
                                    </div> 
                                    <div className="cm_user-placeholder">Write  a comment.....</div> 
                                </div>
                                <div className="cm_post">Post</div>
                                </div>
                                {
                                    msgData.length == 0 ?
                                    <div className="cm_be-first-line">
                                        <span className="cm_be-first-line-txt">--be the first to Comment--</span>
                                        <span className="line"></span>
                                    </div>:null
                                }
                                
                            </div>
                        </div>:
                        null
                  }    
                  {
                      cookies.get('userId') != undefined  || showMsgBox ?  
                      <UserInputComment msgPost={msgPostfunc} showLoginForm={showLoginForm} showLoginMsg={isloggedIn} userName={userName == undefined || userName == "" ? uname : userName} />:
                      null
                  }       
                
                {
                    showLogin && !isloggedIn && cookies.get('userId') == undefined ? <UserLogin checkUserLogin={checkLogin} />:
                    null
                }
                
            </div>
        </Fragment>
    )
})

export default WriteComment;