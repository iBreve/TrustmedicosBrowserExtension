import React from 'react'
import "./Dashboard.css";
import db from "../../firebase";
import { useState, useEffect } from 'react';
import Links from './Links/Links'
import Trust from './Trust Score/Trust'
import Users from "./Users/Users";

export default function Dashboard() {
  const [fakeinfo , setFakeInfo] = useState([]);
  const [goodinfo , setGoodInfo] = useState([]);

  useEffect(() => {
      FetchFakedata();
      FetchGooddata();
  }, []);

  const FetchFakedata = ()=>{
      console.log("home");
      db.collection("Fake news").get().then((querySnapshot) => {
          querySnapshot.forEach(element => {
              var Fake = element.data();
              setFakeInfo(arr => [...arr , Fake]);
                
          });
      })
  }
  const FetchGooddata = ()=>{
    console.log("home");
    db.collection("Good news").get().then((querySnapshot) => {
        querySnapshot.forEach(element => {
            var Good = element.data();
            setGoodInfo(arr => [...arr , Good]);
              
        });
    })
}

  return (
    <div className='dashMain'>
      <div>
        <h1 className='title'>Fake News</h1>
        {
          fakeinfo.map((data) => (
              <Links data={data}/>
          ))
        }
        <h1 className='title'>Good News</h1>
        {
          goodinfo.map((data) => (
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
