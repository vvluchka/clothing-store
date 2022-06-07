
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Heading from './Components/Heading/Heading';
import Item from './Components/Item/Item';
import Data from './Data';
import './App.css';



function App() {
  
  const items = Data.map(item => {

    return <Item 
              key = {item.id}
              item = {item}
            />
  })

  return (
    <div className="App">
      <Navbar />
      <Heading />
      <div className="grid">
      
        {items}
        
      </div>

      
    </div>
  );
}


export default App;
