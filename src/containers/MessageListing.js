import React, {Fragment, useState, useEffect} from 'react';
import Cookies from 'universal-cookie';

const MessageListing = ()=>{

    const [msgData, setmsgData] = useState([]);
    const [inputMsgState, setInputMsgState] = useState([]);
    const [counterState, setCounterState] = useState(0);
    const cookies = new Cookies();

const findAncestor = (el, cls) => {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

const showReplyInput = (event) =>{
    const msgOptList = findAncestor(event.target, "cm_list-footer");
    if(msgOptList.nextElementSibling.style.display == "none" || msgOptList.nextElementSibling.style.display == ""){
        msgOptList.nextElementSibling.style.display = "block";
    }else{
        msgOptList.nextElementSibling.style.display = "none";
    }
}

    const likefunc = (currentData) => {
        if(cookies.get('userId') != undefined){
            fetch('http://localhost:3000/comments/'+currentData.id,{
               method: 'PUT',
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                   ...currentData,
                 "like": currentData.like + 1
               })
            }) 
          }
        }

    const dislikefunc = (currentData) => {
        if(cookies.get('userId') != undefined){
            fetch('http://localhost:3000/comments/'+currentData.id,{
               method: 'PUT',
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                   ...currentData,
                 "dislike": currentData.dislike + 1
               })
            })
        }
    }
    const replayHandle = (e)=>{
     setInputMsgState(e.target.value);
    }

        const submitHandle = (e) =>{
            e.preventDefault();
        }

        const postHandle = (data) =>{
        if(cookies.get('userId') != undefined){
            fetch('http://localhost:3000/comments/'+data.id,{
               method: 'PUT',
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                   ...data,
                 "reply": [
                    ...data.reply,
                     {
                        "time" : new Date(),
                        "userId" : cookies.get('userId'),
                        "username" : data.userDetail[0].username,
                        "body" : inputMsgState,
                        "like": 0,
                        "dislike": 0
                     }]
               })
            })
        }
    }

    useEffect(()=>{
        fetch("http://localhost:3000/comments?_sort=time&_order=desc")
        .then(res => res.json())
        .then(data => setmsgData(data))
    },[])

    return(
        <Fragment>
            {
                msgData && msgData.map((data, index)=>{
                   return <li key={index}>
                    <div className="cm_list-inner">
                            <div className="cm_list-head">
                                <div className="cm_user_name">
                                    <div className="cm_first-letter" style={{backgroundColor: "#ffe1b7"}}>{data.userDetail[0].username[0]}</div>
                                    <div className="cm_full-name">{data.userDetail[0].username}</div>
                                </div>
                <div className="cm_time">1 min ago</div>
                            </div>
                            <div className="cm_msg">{data.body}</div>
                            <div className="cm_list-footer">
                                <ul className="cm_like-dislike-reply">
                                    <li onClick={()=>likefunc(data)} className="cm_thumb-icon"><span className="cm_thumbUp-icon"><svg version="1.1" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg" ><g><g id="Icon-Like" transform="translate(78.000000, 528.000000)"><path className="st0" d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5 c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/><path className="st0" d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/></g></g></svg></span>{data.like}</li>
                                    <li onClick={()=>dislikefunc(data)} className="cm_thumb-icon"><span className="cm_thumbDown-icon"><svg version="1.1" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg" ><g><g id="Icon-Like" transform="translate(78.000000, 528.000000)"><path className="st0" d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5 c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/><path className="st0" d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/></g></g></svg></span>{data.dislike}</li>
                                    <li onClick={showReplyInput} className="cm_reply"><span className="cm_reply-icon"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><g data-name="Layer 50" id="Layer_50"><path className="cls-1" d="M30,29a1,1,0,0,1-.81-.41l-2.12-2.92A18.66,18.66,0,0,0,15,18.25V22a1,1,0,0,1-1.6.8l-12-9a1,1,0,0,1,0-1.6l12-9A1,1,0,0,1,15,4V8.24A19,19,0,0,1,31,27v1a1,1,0,0,1-.69.95A1.12,1.12,0,0,1,30,29ZM14,16.11h.1A20.68,20.68,0,0,1,28.69,24.5l.16.21a17,17,0,0,0-15-14.6,1,1,0,0,1-.89-1V6L3.67,13,13,20V17.11a1,1,0,0,1,.33-.74A1,1,0,0,1,14,16.11Z"/></g></svg></span></li>
                                </ul>
                            </div>
                            
                            <div id={"cm_reply-msg" + index} className="cm_login-comment">
                                <div className="cm_post-comment">
                                <form onSubmit={submitHandle}>
                                    <textarea onChange={replayHandle} value={inputMsgState} name="" id="" className="cm_msg-box" placeholder="Write  a comment....."></textarea>
                                    <div className="cm_char-count">
                                        <span className="cm_char">0</span>
                                        (Characters)
                                    </div>
                                    <button onClick={()=>postHandle(data)} className="cm_msg-submit">Post</button>
                                 </form>
                                </div>
                                <div className="cm_post-error">Please Login to post your comment</div>
                            </div>
                            
                        </div>
                        <ul className="cm_reply-comment">
                            {
                                data.reply.map((rep, index) => {
                                 return  <li key={index}>
                                        <div className="cm_list-inner">
                                            <div className="cm_list-head">
                                                <div className="cm_user_name">
                                                    <div className="cm_first-letter">{rep.username[0]}</div>
                                <div className="cm_full-name">{rep.username} <span className="replyOnUser">@ {data.userDetail[0].username}</span></div>
                                                </div>
                                                <div className="cm_time">1 min ago</div>
                                            </div>
                                <div className="cm_msg">{rep.body}</div>
                                            <div className="cm_list-footer">
                                                <ul className="cm_like-dislike-reply">
                                <li className="cm_thumb-icon"><span className="cm_thumbUp-icon"><svg version="1.1" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg" ><g><g id="Icon-Like" transform="translate(78.000000, 528.000000)"><path className="st0" d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5 c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/><path className="st0" d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/></g></g></svg></span>{rep.like}</li>
                                <li className="cm_thumb-icon"><span className="cm_thumbDown-icon"><svg version="1.1" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg" ><g><g id="Icon-Like" transform="translate(78.000000, 528.000000)"><path className="st0" d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5 c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/><path className="st0" d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/></g></g></svg></span>{rep.dislike}</li>
                                                    <li onClick={showReplyInput} className="cm_reply"><span className="cm_reply-icon"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><g data-name="Layer 50" id="Layer_50"><path className="cls-1" d="M30,29a1,1,0,0,1-.81-.41l-2.12-2.92A18.66,18.66,0,0,0,15,18.25V22a1,1,0,0,1-1.6.8l-12-9a1,1,0,0,1,0-1.6l12-9A1,1,0,0,1,15,4V8.24A19,19,0,0,1,31,27v1a1,1,0,0,1-.69.95A1.12,1.12,0,0,1,30,29ZM14,16.11h.1A20.68,20.68,0,0,1,28.69,24.5l.16.21a17,17,0,0,0-15-14.6,1,1,0,0,1-.89-1V6L3.67,13,13,20V17.11a1,1,0,0,1,.33-.74A1,1,0,0,1,14,16.11Z"/></g></svg></span></li>
                                                </ul>
                                            </div>
                                            <div id={"cm_reply-msg" + index} className="cm_login-comment">
                                            <div className="cm_post-comment">
                                                <form onSubmit={submitHandle}>
                                                    <textarea onChange={replayHandle} value={inputMsgState} name="" id="" className="cm_msg-box" placeholder="Write  a comment....."></textarea>
                                                    <div className="cm_char-count">
                                                        <span className="cm_char">}0</span>
                                                        (Characters)
                                                    </div>
                                                    <button onClick={()=>postHandle(data)} className="cm_msg-submit">Post</button>
                                                </form>
                                                </div>
                                                <div className="cm_post-error">Please Login to post your comment</div>
                                            </div>
                                        </div> 
                                    </li>
                                })
                            }
                        </ul>
                    </li>
                })
            }
            
        </Fragment>
    )
}

export default MessageListing;