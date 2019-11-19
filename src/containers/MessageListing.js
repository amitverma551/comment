import React, {Fragment} from 'react';

const MessageListing = ()=>{
    return(
        <Fragment>
            <li>
           <div className="cm_list-inner">
                <div className="cm_list-head">
                    <div className="cm_user_name">
                        <div className="cm_first-letter" style={{backgroundColor: "#ffe1b7"}}>s</div>
                        <div className="cm_full-name">Suchir Patel</div>
                    </div>
                    <div className="cm_time">1 min ago</div>
                </div>
                <div className="cm_msg">भोपाल की विशेष अदालत की हिदायत के बावजूद आकाश विजयवर्गीय के कहा कि उन्हें घटना को लेकर कोई अफसोस नहीं है। भाजपा के संस्कारों की अर्थी निकल रही है..!</div>
                <div className="cm_list-footer">
                    <ul className="cm_like-dislike-reply">
                        <li className="cm_thumb-icon">
                            <span className="cm_thumbUp-icon">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 50 50" ><g><path style={{fill:"#C2C1C1"}} d="M6.928,11.509c0,10.527,0,20.992,0,31.487c10.497,0,20.972,0,31.499,0c0-0.188,0-0.354,0-0.522c0-3.907,0-7.813,0-11.72c0-0.959,0.288-1.247,1.263-1.248c0.719-0.001,1.437-0.006,2.156,0.002c0.76,0.008,1.07,0.328,1.07,1.096c0.001,4.86,0.004,9.72,0.001,14.58c0,1.379-0.946,2.315-2.33,2.315c-11.955,0.001-23.91,0-35.865-0.001c-1.321,0-2.285-0.952-2.287-2.261C2.433,33.267,2.433,21.295,2.436,9.324c0-1.375,0.948-2.307,2.335-2.307c4.079-0.001,8.158,0,12.237,0c0.858,0,1.164,0.296,1.17,1.14c0.005,0.735,0.004,1.47,0,2.204c-0.004,0.83-0.331,1.148-1.176,1.148c-3.189,0.001-6.376,0.001-9.563,0C7.284,11.509,7.129,11.509,6.928,11.509z"/><path style={{fill:"#C2C1C1"}} d="M16.621,33.997c-0.498,0.006-0.757-0.344-0.656-0.84c0.367-1.817,0.743-3.63,1.113-5.447c0.09-0.443,0.182-0.887,0.247-1.333c0.067-0.458,0.311-0.773,0.639-1.095c1.77-1.736,3.509-3.504,5.263-5.258c3.288-3.292,6.582-6.582,9.867-9.879c0.308-0.308,0.538-0.328,0.856-0.006c1.932,1.954,3.882,3.893,5.825,5.839c0.391,0.39,0.394,0.477,0.002,0.871c-2.355,2.35-4.716,4.694-7.066,7.045c-2.648,2.646-5.304,5.285-7.921,7.961c-0.488,0.498-1.039,0.697-1.673,0.825c-2.106,0.423-4.212,0.852-6.317,1.281C16.723,33.975,16.648,33.992,16.621,33.997z"/><path style={{fill:"#C2C1C1"}} d="M47.566,8.491c-0.227,0.439-0.344,0.866-0.614,1.152c-1.019,1.08-2.082,2.116-3.134,3.162c-0.344,0.341-0.565,0.328-0.916-0.022c-1.921-1.92-3.841-3.842-5.761-5.763c-0.352-0.352-0.358-0.548-0.002-0.906c1.023-1.032,2.046-2.065,3.081-3.084c0.724-0.714,1.65-0.705,2.369,0.011c1.428,1.421,2.864,2.836,4.266,4.285C47.152,7.631,47.314,8.067,47.566,8.491z"/></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                            </span>
                        </li>
                        <li className="cm_thumb-icon">
                            <span className="cm_thumbUp-icon">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 50 50" ><path style={{fill:"#a1a1a1"}} d="M10.075,43.658c0,1.847,1.496,3.342,3.341,3.342h23.171c1.845,0,3.339-1.495,3.339-3.342v-30.41H10.075V43.658z M34.568,6.933V3.641C34.568,3.287,34.281,3,33.926,3H16.074c-0.355,0-0.642,0.287-0.642,0.641v3.292H7.89v3.207h34.22V6.933H34.568z"/><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                            </span>
                        </li>
                        <li className="cm_thumb-icon"><span className="cm_thumbUp-icon"><svg version="1.1" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg" ><g><g id="Icon-Like" transform="translate(78.000000, 528.000000)"><path className="st0" d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5 c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/><path className="st0" d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/></g></g></svg></span> 37</li>
                        <li className="cm_thumb-icon"><span className="cm_thumbDown-icon"><svg version="1.1" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg" ><g><g id="Icon-Like" transform="translate(78.000000, 528.000000)"><path className="st0" d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5 c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/><path className="st0" d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/></g></g></svg></span> 15</li>
                        <li className="cm_reply"><span className="cm_reply-icon"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><g data-name="Layer 50" id="Layer_50"><path className="cls-1" d="M30,29a1,1,0,0,1-.81-.41l-2.12-2.92A18.66,18.66,0,0,0,15,18.25V22a1,1,0,0,1-1.6.8l-12-9a1,1,0,0,1,0-1.6l12-9A1,1,0,0,1,15,4V8.24A19,19,0,0,1,31,27v1a1,1,0,0,1-.69.95A1.12,1.12,0,0,1,30,29ZM14,16.11h.1A20.68,20.68,0,0,1,28.69,24.5l.16.21a17,17,0,0,0-15-14.6,1,1,0,0,1-.89-1V6L3.67,13,13,20V17.11a1,1,0,0,1,.33-.74A1,1,0,0,1,14,16.11Z"/></g></svg></span></li>
                    </ul>
                </div>
                
                <div className="cm_login-comment">
                    <div className="cm_post-comment">
                        <textarea name="" id="" className="cm_msg-box" placeholder="Write  a comment....."></textarea>
                        <div className="cm_char-count">
                            <span className="cm_char">0</span>
                            (Characters)
                        </div>
                        <button className="cm_msg-submit">Post</button>
                    </div>
                    <div className="cm_post-error">Please Login to post your comment</div>
                </div>
                
            </div>
            <ul className="cm_reply-comment">
                <li>
                   <div className="cm_list-inner">
                    <div className="cm_list-head">
                        <div className="cm_user_name">
                            <div className="cm_first-letter">s</div>
                            <div className="cm_full-name">Suchir Patel <span className="replyOnUser">@ Suchir patel</span></div>
                        </div>
                        <div className="cm_time">1 min ago</div>
                    </div>
                    <div className="cm_msg">भोपाल की विशेष अदालत की हिदायत के बावजूद आकाश विजयवर्गीय के कहा कि उन्हें घटना को लेकर कोई अफसोस नहीं है। भाजपा के संस्कारों की अर्थी निकल रही है..!</div>
                    <div className="cm_list-footer">
                    <ul className="cm_like-dislike-reply">
                        <li className="cm_thumb-icon"><span className="cm_thumbUp-icon"><svg version="1.1" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg" ><g><g id="Icon-Like" transform="translate(78.000000, 528.000000)"><path className="st0" d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5 c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/><path className="st0" d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/></g></g></svg></span> 37</li>
                        <li className="cm_thumb-icon"><span className="cm_thumbDown-icon"><svg version="1.1" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg" ><g><g id="Icon-Like" transform="translate(78.000000, 528.000000)"><path className="st0" d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5 c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/><path className="st0" d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/></g></g></svg></span> 15</li>
                        <li className="cm_reply"><span className="cm_reply-icon"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><g data-name="Layer 50" id="Layer_50"><path className="cls-1" d="M30,29a1,1,0,0,1-.81-.41l-2.12-2.92A18.66,18.66,0,0,0,15,18.25V22a1,1,0,0,1-1.6.8l-12-9a1,1,0,0,1,0-1.6l12-9A1,1,0,0,1,15,4V8.24A19,19,0,0,1,31,27v1a1,1,0,0,1-.69.95A1.12,1.12,0,0,1,30,29ZM14,16.11h.1A20.68,20.68,0,0,1,28.69,24.5l.16.21a17,17,0,0,0-15-14.6,1,1,0,0,1-.89-1V6L3.67,13,13,20V17.11a1,1,0,0,1,.33-.74A1,1,0,0,1,14,16.11Z"/></g></svg></span></li>
                    </ul>
                </div>
                </div> 
                </li>
                <li>
                   <div className="cm_list-inner">
                    <div className="cm_list-head">
                        <div className="cm_user_name">
                            <div className="cm_first-letter">s</div>
                            <div className="cm_full-name">Suchir Patel <span className="replyOnUser">@ Suchir patel</span></div>
                        </div>
                        <div className="cm_time">1 min ago</div>
                    </div>
                    <div className="cm_msg">भोपाल की विशेष अदालत की हिदायत के बावजूद आकाश विजयवर्गीय के कहा कि उन्हें घटना को लेकर कोई अफसोस नहीं है। भाजपा के संस्कारों की अर्थी निकल रही है..!</div>
                    <div className="cm_list-footer">
                    <ul className="cm_like-dislike-reply">
                        <li className="cm_thumb-icon"><span className="cm_thumbUp-icon"><svg version="1.1" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg" ><g><g id="Icon-Like" transform="translate(78.000000, 528.000000)"><path className="st0" d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5 c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/><path className="st0" d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/></g></g></svg></span> 37</li>
                        <li className="cm_thumb-icon"><span className="cm_thumbDown-icon"><svg version="1.1" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg" ><g><g id="Icon-Like" transform="translate(78.000000, 528.000000)"><path className="st0" d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5 c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/><path className="st0" d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/></g></g></svg></span> 15</li>
                        <li className="cm_reply"><span className="cm_reply-icon"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><g data-name="Layer 50" id="Layer_50"><path className="cls-1" d="M30,29a1,1,0,0,1-.81-.41l-2.12-2.92A18.66,18.66,0,0,0,15,18.25V22a1,1,0,0,1-1.6.8l-12-9a1,1,0,0,1,0-1.6l12-9A1,1,0,0,1,15,4V8.24A19,19,0,0,1,31,27v1a1,1,0,0,1-.69.95A1.12,1.12,0,0,1,30,29ZM14,16.11h.1A20.68,20.68,0,0,1,28.69,24.5l.16.21a17,17,0,0,0-15-14.6,1,1,0,0,1-.89-1V6L3.67,13,13,20V17.11a1,1,0,0,1,.33-.74A1,1,0,0,1,14,16.11Z"/></g></svg></span></li>
                    </ul>
                </div>
                </div> 
                </li>
            </ul>
        </li>
        <li>
           <div className="cm_list-inner">
                <div className="cm_list-head">
                    <div className="cm_user_name">
                        <div className="cm_first-letter" style={{backgroundColor: "#000", color : "#fff"}}>p</div>
                        <div className="cm_full-name">Piyush</div>
                    </div>
                    <div className="cm_time">1 min ago</div>
                </div>
                <div className="cm_msg">The Congress government has "turned a deaf ear" to the problems being faced by cultivators and other people due to heavy rains and subsequent floods.of MP</div>
                <div className="cm_list-footer">
                    <ul className="cm_like-dislike-reply">
                        <li className="cm_thumb-icon"><span className="cm_thumbUp-icon"><svg version="1.1" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg" ><g><g id="Icon-Like" transform="translate(78.000000, 528.000000)"><path className="st0" d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5 c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/><path className="st0" d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/></g></g></svg></span> 37</li>
                        <li className="cm_thumb-icon"><span className="cm_thumbDown-icon"><svg version="1.1" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg" ><g><g id="Icon-Like" transform="translate(78.000000, 528.000000)"><path className="st0" d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5 c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/><path className="st0" d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/></g></g></svg></span> 15</li>
                        <li className="cm_reply"><span className="cm_reply-icon"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><g data-name="Layer 50" id="Layer_50"><path className="cls-1" d="M30,29a1,1,0,0,1-.81-.41l-2.12-2.92A18.66,18.66,0,0,0,15,18.25V22a1,1,0,0,1-1.6.8l-12-9a1,1,0,0,1,0-1.6l12-9A1,1,0,0,1,15,4V8.24A19,19,0,0,1,31,27v1a1,1,0,0,1-.69.95A1.12,1.12,0,0,1,30,29ZM14,16.11h.1A20.68,20.68,0,0,1,28.69,24.5l.16.21a17,17,0,0,0-15-14.6,1,1,0,0,1-.89-1V6L3.67,13,13,20V17.11a1,1,0,0,1,.33-.74A1,1,0,0,1,14,16.11Z"/></g></svg></span></li>
                    </ul>
                </div>
            </div>
        </li>
        <li>
           <div className="cm_list-inner">
                <div className="cm_list-head">
                    <div className="cm_user_name">
                        <div className="cm_first-letter" style={{backgroundColor: "#ffe1b7"}}>s</div>
                        <div className="cm_full-name">Suchir Patel</div>
                    </div>
                    <div className="cm_time">1 min ago</div>
                    <div className="cm_msg-option">
                       <div className="cm_msg-ipt-icon"><svg enable-background="new 0 0 32 32" version="1.1" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg" ><path d="M13,16c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,14.346,13,16z" id="XMLID_294_"/><path d="M13,26c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,24.346,13,26z" id="XMLID_295_"/><path d="M13,6c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,4.346,13,6z" id="XMLID_297_"/></svg></div>
                       <ul className="cm_msg-opt-list">
                           <li>Report Comment</li>
                           <li>Hide Comment</li>
                       </ul>
                    </div>
                </div>
                <div className="cm_msg">भोपाल की विशेष अदालत की हिदायत के बावजूद आकाश विजयवर्गीय के कहा कि उन्हें घटना को लेकर कोई अफसोस नहीं है। भाजपा के संस्कारों की अर्थी निकल रही है..!</div>
                <div className="cm_list-footer">
                    <ul className="cm_like-dislike-reply">
                        <li className="cm_thumb-icon"><span className="cm_thumbUp-icon"><svg version="1.1" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg" ><g><g id="Icon-Like" transform="translate(78.000000, 528.000000)"><path className="st0" d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5 c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/><path className="st0" d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/></g></g></svg></span> 37</li>
                        <li className="cm_thumb-icon"><span className="cm_thumbDown-icon"><svg version="1.1" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg" ><g><g id="Icon-Like" transform="translate(78.000000, 528.000000)"><path className="st0" d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5 c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/><path className="st0" d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/></g></g></svg></span> 15</li>
                        <li className="cm_reply"><span className="cm_reply-icon"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><g data-name="Layer 50" id="Layer_50"><path className="cls-1" d="M30,29a1,1,0,0,1-.81-.41l-2.12-2.92A18.66,18.66,0,0,0,15,18.25V22a1,1,0,0,1-1.6.8l-12-9a1,1,0,0,1,0-1.6l12-9A1,1,0,0,1,15,4V8.24A19,19,0,0,1,31,27v1a1,1,0,0,1-.69.95A1.12,1.12,0,0,1,30,29ZM14,16.11h.1A20.68,20.68,0,0,1,28.69,24.5l.16.21a17,17,0,0,0-15-14.6,1,1,0,0,1-.89-1V6L3.67,13,13,20V17.11a1,1,0,0,1,.33-.74A1,1,0,0,1,14,16.11Z"/></g></svg></span></li>
                    </ul>
                </div>
            </div>
        </li>
        <li>
           <div className="cm_list-inner">
                <div className="cm_list-head">
                    <div className="cm_user_name">
                        <div className="cm_first-letter" style={{backgroundColor: "#ffe1b7"}}>s</div>
                        <div className="cm_full-name">Suchir Patel</div>
                    </div>
                    <div className="cm_time">1 min ago</div>
                </div>
                <div className="cm_msg">भोपाल की विशेष अदालत की हिदायत के बावजूद आकाश विजयवर्गीय के कहा कि उन्हें घटना को लेकर कोई अफसोस नहीं है। भाजपा के संस्कारों की अर्थी निकल रही है..!</div>
                <div className="cm_list-footer">
                    <ul className="cm_like-dislike-reply">
                        <li className="cm_thumb-icon"><span className="cm_thumbUp-icon"><svg version="1.1" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg" ><g><g id="Icon-Like" transform="translate(78.000000, 528.000000)"><path className="st0" d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5 c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/><path className="st0" d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/></g></g></svg></span> 37</li>
                        <li className="cm_thumb-icon"><span className="cm_thumbDown-icon"><svg version="1.1" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg" ><g><g id="Icon-Like" transform="translate(78.000000, 528.000000)"><path className="st0" d="M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5 c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z" id="Fill-4_2_"/><path className="st0" d="M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5" id="Fill-6_2_"/></g></g></svg></span> 15</li>
                        <li className="cm_reply"><span className="cm_reply-icon"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><g data-name="Layer 50" id="Layer_50"><path className="cls-1" d="M30,29a1,1,0,0,1-.81-.41l-2.12-2.92A18.66,18.66,0,0,0,15,18.25V22a1,1,0,0,1-1.6.8l-12-9a1,1,0,0,1,0-1.6l12-9A1,1,0,0,1,15,4V8.24A19,19,0,0,1,31,27v1a1,1,0,0,1-.69.95A1.12,1.12,0,0,1,30,29ZM14,16.11h.1A20.68,20.68,0,0,1,28.69,24.5l.16.21a17,17,0,0,0-15-14.6,1,1,0,0,1-.89-1V6L3.67,13,13,20V17.11a1,1,0,0,1,.33-.74A1,1,0,0,1,14,16.11Z"/></g></svg></span></li>
                    </ul>
                </div>
            </div>
        </li>
        </Fragment>
    )
}

export default MessageListing;