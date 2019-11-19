import React, {Fragment} from 'react';
import './App.css';
import Header from './containers/Header';
import WriteComment from './containers/WriteComment';
import MessageListing from './containers/MessageListing';

function App() {
  return (
    <Fragment>
      <div className="cm_comment-wrapper cm_open">
        <div className="cm_first-comment">
          <Header/>
          <WriteComment/>
        </div>
        <div className="cm_list cm_m_scroll">
          <ul>
            <MessageListing/>
          </ul>
         </div>
       </div>
    </Fragment>
  );
}

export default App;
