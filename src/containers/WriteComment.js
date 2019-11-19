import React, {Fragment} from 'react';

const WriteComment = ()=>{
    return (
        <Fragment>
            <div className="cm_write-comment">
                <div className="cm_comment-count">
                    <div className="cm_count-item">All Comments <span>(50)</span></div>
                    <div className="cm_count-item">Replies <span>(12)</span></div>
                </div>
                <div className="cm_typeIn">
                <span className="cm_typeIn-txt">Write in:</span>
                    <label className="cm_switch">
                        <input className="cm_switch-input" type="checkbox" />
                        <span className="cm_switch-label" data-on="English" data-off="Hindi"></span> 
                        <span className="cm_switch-handle"></span> 
                    </label>
                </div>
                <div className="cm_be-first has-comments">
                <div className="cm_dummy-input">
                        <div className="cm_click-expend">
                        <div className="cm_click-expend-inner">
                            <div className="cm_user-icon">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="541.375px" height="446.576px" viewBox="35.313 172.718 541.375 446.576"enableBackground="new 35.313 172.718 541.375 446.576"><g><path fill="#C2C1C1" d="M576.688,619.294c0-0.795-0.135-1.591-0.258-2.398c-1.224-96.562-75.043-175.607-169.426-184.91c-27.54,22.437-62.632,35.949-100.857,35.949c-38.213,0-73.33-13.513-100.857-35.985c-95.398,9.217-169.977,89.535-169.977,187.345h0.159"/><path fill="#C2C1C1" d="M306.147,443.332c74.615,0,135.313-60.698,135.313-135.301c0-74.615-60.698-135.313-135.313-135.313s-135.301,60.698-135.301,135.313C170.846,382.634,231.531,443.332,306.147,443.332z"/></g></svg>
                            </div> 
                            <div className="cm_user-placeholder">Write  a comment.....</div> 
                        </div>
                        <div className="cm_post">Post</div>
                        </div>
                        <div className="cm_be-first-line">
                            <span className="cm_be-first-line-txt">--be the first to Comment--</span>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="cm_error-msg">Please Login to post your comment</div>
                </div>
                <div className="cm_login-comment">
                    <div className="cm_post-comment cmt-active">
                        <div className="cm_Uname-InComment">
                            <div className="cm_user_name">
                                <div className="cm_first-letter" style={{backgroundColor: "#ffe1b7"}}>s</div>
                                <div className="cm_full-name">Suchir Patel</div>
                            </div>
                        </div>
                        <textarea name="elm1" id="txtHindi" className="cm_msg-box" placeholder="Write  a comment....."></textarea>
                        <div className="cm_char-count">
                            <span className="cm_char">0</span>
                            (Characters)
                        </div>
                        <button className="cm_msg-submit">Post</button>
                    </div>
                    <div className="cm_post-error">Please Login to post your comment</div>
                </div>
                <div className="cm_login-with">
                    <div className="cm_signin-with">
                        <div className="cm_signIn-txt">Sign in with</div>
                        <div className="cm_login-fb"><span className="cm_login-icon"><svg height="13px" width="13px" enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="M308.3,508.5c-2.5,0.1-4.1,0.3-5.7,0.3c-34.2,0-68.3-0.1-102.5,0.1c-4.8,0-6.1-1.3-6.1-6.1c0.1-79.6,0.1-159.3,0.1-238.9   c0-2.1,0-4.2,0-6.9c-18.6,0-36.7,0-55.1,0c0-28.4,0-56.3,0-85c1.9,0,3.7,0,5.4,0c15,0,30-0.1,45,0.1c3.8,0,4.8-1.1,4.8-4.8   c-0.2-22.3-0.2-44.7,0-67c0.1-15.6,2.6-30.8,9.8-44.9c10.3-19.9,26.6-32.8,47.2-40.8c16.8-6.6,34.5-9,52.3-9.3   c29-0.4,58-0.2,87-0.3c2.7,0,4.9-0.1,4.9,3.7c-0.1,27.5-0.1,55-0.1,82.5c0,0.3-0.1,0.6-0.5,1.9c-1.7,0-3.6,0-5.5,0   c-18,0-36-0.1-54,0c-10.4,0-18.8,4.2-24.1,13.3c-1.6,2.7-2.6,6.2-2.6,9.4c-0.3,17,0,34-0.2,51c0,4,1.2,5.1,5.1,5.1   c25-0.2,50-0.1,75-0.1c2,0,3.9,0,7.3,0c-3.5,28.6-6.9,56.6-10.4,84.9c-26,0-51.3,0-77.1,0C308.3,340.8,308.3,424.4,308.3,508.5z"/></g></svg></span> Facebook</div>
                        <div className="cm_login-g"><span className="cm_login-icon"><svg height="13px" viewBox="0 0 1792 1792" width="13px" xmlns="http://www.w3.org/2000/svg"><path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"/></svg></span> Google</div>
                    </div>
                    <div className="cm-login-sap">
                        <span className="cm_or">OR</span>
                    </div>
                    <div className="cm-without-login">
                        <div className="cm_signIn-txt">Continue Without Login</div>
                        <div className="cm_without-form">
                            <form>
                                <div className="cm_form-group">
                                <input type="text" name="" id="" placeholder="Full Name" />
                                </div>
                                <div className="cm_form-group">
                                <input type="email" name="" id="" placeholder="Email" />
                                </div>
                                <div className="cm_form-group">
                                <input type="text" name="" id="" placeholder="Location" />
                                </div>
                                <div className="cm_form-group">
                                <div className="cm_math-sum">19+3=</div>
                                <div className="cm_math-sum-input">
                                    <input type="text" name="" id="" />
                                </div>
                                </div>
                                <div className="cm_form-group">
                                    <button type="submit" className="cm_login-submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WriteComment;