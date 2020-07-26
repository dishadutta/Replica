// import React from 'react';
// import logo from './logo.svg';
// import './App.scss';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

import React from 'react';
import HeadPage from "./HeadPage";
import Home from "./Home";
import Features from "./Features";
import Overview from "./Overview";
import Screens from "./Screens";
import Contacts from "./Contacts";
import logo from './logo.svg';
import './App.scss';

const App = () => (
    <div style={{paddingLeft: "40px", paddingRight: "40px"}} >
        <div className="gap"></div>
        <HeadPage />
        <div className="gap"></div>
        <Home />
        <div className="gap"></div>
        <Features />
        <div className="gap"></div>
        <Overview />
        <div className="gap"></div>
        <Screens />
        <div classnNAme="gap"></div>
        <Contacts />
        <div className="gap"></div>
    </div>
);


export default App;
