import logo from './logo.svg';
import './App.css';
import TabBar from "./components/TabBar"
import BookBody from "./components/BookBody"
import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(1);

  const onCountChange = (value) => {
      setCount(value)
  }
  
  return (
    <div className="App">
      <TabBar count={count} onCountChange={onCountChange}/>
      {count === 1 ? <BookBody /> :
      <div style={{
        display: "flex",
        width: "100%",
        backgroundColor: "white",
        flexDirection: "column"
      }}>
          <div style={{
              height: "100px",
              padding: "5px",
              borderBottom: "1px solid white"
          }}>
          </div>
             {count === 0 ? "Students" : "Settings"}
      </div>}
    </div>
  );
}

export default App;
