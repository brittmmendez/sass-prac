import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="bg">
          <div className="header">
            <a href='/'> ZoomZoom </a>
          </div>

          <div className="main">
            <section id="card">
             <ul>
               <li>
                 <span></span>
                 <strong> How can I help you? </strong>
               </li> 
               <li>
                 <span></span>
                 <strong> Don't think I can be helped</strong>
               </li> 
               <li>
                 <span></span>
                 <strong> That's deep, let me help! </strong>
               </li> 
              </ul>
            </section>

            <section id="primary">
              <h1> Your Personal Assistant </h1>
              <p> Get heklp with you daily life stuff!</p>

              <a href='/'> Get help already! </a>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
