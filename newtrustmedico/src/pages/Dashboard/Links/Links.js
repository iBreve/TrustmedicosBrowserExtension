import React from 'react'
import './Links.css'
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import db from '../../../firebase';
import { Link } from 'react-router-dom';

export default function Links({data}) {
    const pos = (e) => {
        var pos = parseInt(data.positives) + 1
        e.preventDefault();
        db.collection("Fake news").where("url", "==", data.url).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var Ref = db.collection("Fake news").doc(doc.id);
                return Ref.update({
                    positives: pos
                })
                .then(() => {
                    window.location.reload(false);
                })
                .catch((error) => {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }

    const neg = (e) => {
        var neg = parseInt(data.negatives) + 1
        console.log(neg)
        e.preventDefault();
        db.collection("Fake news").where("url", "==", data.url).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var Ref = db.collection("Fake news").doc(doc.id);
                return Ref.update({
                    negatives: neg
                })
                .then(() => {
                    window.location.reload(false);
                })
                .catch((error) => {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }

    return (
        <div className="featured">
          <div className="featuredItem">
                        <div>
                            <h2>{data.title}</h2>
                            <Link to={{pathname: data.url }} target="_blank">{data.url}</Link>
                        </div>
                        <div className="featuredRate">
                            <form onSubmit={(event) => {pos(event)}}>
                                <h3>{data.positives}</h3>
                                <button type="submit"><FaThumbsUp/></button>
                            </form>
                            <form onSubmit={(event) => {neg(event)}}>
                                <h3>{data.negatives}</h3>
                                <button type="submit"><FaThumbsDown/></button>
                            </form>
                        </div>
          </div>
        </div>
    );
}
