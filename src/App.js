import React from 'react';
import './App.css';
import Posts from './components/Posts';

const App = () => {
  return ( 
               <div className='App'>
                  <h1>crud app with redux toolokit</h1>
                 <Posts/> 
               </div>  
          );
}

export default App;