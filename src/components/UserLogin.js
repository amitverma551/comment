import React from 'react';
import FacebookAuth from './FacebookAuth';

const UserLogin = props =>{
    console.log("user Comp")
  return (
        <div className="cm_login-with">
        <div className="cm_signin-with">
            <div className="cm_signIn-txt">Sign in with</div>
            <FacebookAuth />
            {/* <FacebookAuth checkUserLogin={props.checkUserLogin} /> */}
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
  )
}

export default UserLogin;