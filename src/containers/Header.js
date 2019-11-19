import React, {Fragment} from 'react';

const Header = () => {
  return(
      <Fragment>
          <div className="cm_comment-head">
            <div className="cm_cls-comment">
                <svg stroke="#fff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><line strokeWidth="4" x1="2" x2="30" y1="2" y2="30"/><line strokeWidth="4" x1="2" x2="30" y1="30" y2="2"/></svg>
            </div>
            <div className="cm_profile">
                <div className="cm_username">
                    Hi, Gourav Oh...
                </div>
                <ul className="cm_userSetting">
                    <li>Logout</li>
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
                <div className="cm_notification">
                    <div className="cm_noti-icon">
                        <div className="cm_noti-count">2</div>
                        <svg version="1.1" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" ><path d="M22,14.757V12c0-3.866-3.134-7-7-7h0c-3.866,0-7,3.134-7,7v2.757C8,17.474,6.921,20.079,5,22l0,0v2h20v-2l0,0  C23.079,20.079,22,17.474,22,14.757z"/><path d="M15,29c1.657,0,3-1.343,3-3h-6C12,27.657,13.343,29,15,29z"/><path d="M17,7h-4V5c0-1.105,0.895-2,2-2h0c1.105,0,2,0.895,2,2V7z"/><circle cx="25" cy="23" r="1"/><circle cx="5" cy="23" r="1"/></svg>
                    </div>
                    <ul className="cm_m_scroll">
                        <li>Rahul Kumar liked your comment</li>
                        <li>Suchir patel <span>and 2 others</span> replied to your comment</li>
                        <li>Gaurav comment on this story <span>@India is best</span></li>
                        <li>Gaurav comment on this story <span>@India is best</span></li>
                        <li>Gaurav comment on this story <span>@India is best</span></li>
                        <li>Gaurav comment on this story <span>@India is best</span></li>
                    </ul>
                </div>
            </div>
      </Fragment>
  )
}

export default Header;