// import logo from './logo.svg';
import './App.css';
// import ReactDOM from 'react-dom/client';
import React,{ useEffect,useState } from 'react';

function App() {
  const url="https://jsonplaceholder.typicode.com/albums";
  const [data,setData] = useState([]);
  

  const fetched=()=>{
    return fetch(url)
    .then((res) => res.json())
    .then((d)=>setData(d))
  }


  useEffect(()=>{
    fetched();
  },[]);

  return(
    <div className='App'>
      <h1>API</h1>


      {data.map((dataObj)=>{
        return (
          <div>
            <ul>
              <li>{dataObj.id}.{dataObj.title}</li>
              
            </ul>
          </div>
        )
      })};
    </div>
  )
}

export default App;
