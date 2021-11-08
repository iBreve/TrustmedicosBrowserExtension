import React from 'react'
import "./Dashboard.css";
import db from "../../firebase";
import { useState, useEffect } from 'react';
import Links from './Links/Links'
import Trust from './Trust Score/Trust'
import Users from "./Users/Users";

export default function Dashboard() {
  const [info , setInfo] = useState([]);

  useEffect(() => {
      Fetchdata();
  }, []);

  const Fetchdata = ()=>{
      console.log("home");
      db.collection("Fake news").get().then((querySnapshot) => {
          querySnapshot.forEach(element => {
              var Fake = element.data();
              console.log(Fake)
              setInfo(arr => [...arr , Fake]);
                
          });
      })
  }

  return (
    <div className='dashMain'>
      <div>
        {
          info.map((data) => (
              <Links data={data}/>
          ))
        }
        {
          info.map((data) => (
              <Links data={data}/>
          ))
        }
        {
          info.map((data) => (
              <Links data={data}/>
          ))
        }
      </div>
      <div className='right'>
        <div className="trustscore">
          <Trust/>
        </div>
        <div className="user">
          <Users/>
        </div>
      </div>
    </div>
    
  );
}
