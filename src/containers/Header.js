import React, {Fragment} from 'react';
import Cookies from 'universal-cookie';

const Header = (props) => {
    const cookies = new Cookies();
    const msgData = props.msgData;
    const currentUserData  = msgData.filter(x => x.id == cookies.get('userId'));
    const username = currentUserData[0] && currentUserData[0].userDetail[0].username;
    const logourfunc = (event)=>{
        const logoutEl = event.target.nextElementSibling;
        if(logoutEl.style.display == '' || logoutEl.style.display == 'none'){
            logoutEl.style.display ="block";  
        }else{
            logoutEl.style.display ="none"; 
        }   
    }
    const userLogout = () => {
        cookies.remove('userId');
        window.location.reload();
    }

  return(
      <Fragment>
          <div className="cm_comment-head">
            <div className="cm_cls-comment">
                <svg stroke="#fff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><line strokeWidth="4" x1="2" x2="30" y1="2" y2="30"/><line strokeWidth="4" x1="2" x2="30" y1="30" y2="2"/></svg>
            </div>
            <div className="cm_profile">
                {
                    msgData.length && cookies.get('userId') != undefined ?
                    <div onClick={logourfunc} className="cm_username">
                        Hi, {username}
                    </div>:
                    null
                }

                <ul className="cm_userSetting">
                    <li onClick={userLogout}>Logout</li>
                </ul>  
            </div>
                <div className="cm_sortby">
                    <div className="cm_sortby-txt">Sort by: <span className="cm_sortby-changeText">Latest</span> <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M4 8 H28 L16 26 z"/></svg></div>
                    <ul className="cm_sortby-list">
                        <li>Latest</li>
                        <li>Oldest</li>
                        <li>Most Replay</li>
                        <li>Disliked</li>
                        <li>Most Liked</li>
                    </ul>
                </div>
            </div>
      </Fragment>
  )
}

export default Header;