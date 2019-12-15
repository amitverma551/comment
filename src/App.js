import React, {Fragment, useEffect, useState} from 'react';
import './App.css';
import Header from './containers/Header';
import WriteComment from './containers/WriteComment';
import MessageListing from './containers/MessageListing';

const App = React.memo(props =>{
 const [msgData, setMsgData] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/comments',)
    .then(res => res.json())
    .then(data => setMsgData(data))
  },[])

  return (
    <Fragment>
      <div className="cm_comment-wrapper cm_open">
        <div className="cm_first-comment">
          <Header msgData={msgData} />
          <WriteComment msgData={msgData}/>
        </div>
        <div className="cm_list cm_m_scroll">
          <ul>
            <MessageListing/>
          </ul>
         </div>
       </div>
    </Fragment>
  );
})

export default App;
