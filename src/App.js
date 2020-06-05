import React from 'react';

function App() {
  return (
    <div className="App">
    <div className="container" style={{margin:'150px auto'}}>
       <div className="col-sm-5 text-center speed_container">
         <div className="panel panel-default">
         <button id='startbutton'>
       Start Test</button>
    status: <span id='status'>
   </span>
  <div className="panel-body text-center">
   Download Speed <h3 id="down">0</h3>
        Upload Speed <h3 id="up">0</h3>
        Ping <h3 id="ping">0</h3>
        Jitter <h3 id="jitter">0</h3>
        IP <h4 id="ip">0</h4>
        Server <h4 id="nearest">0</h4>
         Quality and Buffert bolt <h4 id="grades">0</h4>
           DNS <h4 id="dns">0</h4>
        <div id='logdiv' style={{display:'none'}}>
 </div>
           </div>
         </div>
       </div>
   </div>
  
  
     </div>
  );
}

export default App;
