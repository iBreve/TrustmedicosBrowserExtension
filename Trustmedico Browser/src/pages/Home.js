import "./Home.css";
import List from "./List";
import db from "../firebase";
import { useState, useEffect } from 'react';

const Home = () => {
  console.log("home11");
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
        <div>
        {
            info.map((data) => (
                <List data={data}/>
            ))
        }
        </div>
  
    );
}
export default Home;
 