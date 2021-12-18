import React ,{Component} from 'react';
import './App.css';
import Gretting from './component/profile/FullName';
import Gret from'./component/profile/ProfilePhoto';
import Gre from'./component/profile/Adresse';

function App() {
  return (
    <div className="App">
  <Gretting/>
 <Gret/>
  <Gre/>
    </div>
  );
}


export default App;
