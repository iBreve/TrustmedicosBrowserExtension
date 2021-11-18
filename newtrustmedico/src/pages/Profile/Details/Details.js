import React from 'react'
import './Details.css'

export default function Details() {
    return (
        <div className="deatils">
            <div className="detailsItems">
                <h1 className="title">
                     User Details
                </h1>
                <div className="detailsInfo">
                    <p className="detailstext">Name:</p>
                    <p> Users Name</p>
                </div>
                <div className="detailsInfo">
                    <p className="detailstext">Email:</p>
                    <p> Users Email</p>
                </div>
                <div className="detailsInfo">
                    <p className="detailstext">User Url:</p>
                    <p> Users Url</p>
                </div>
                <div className="detailsInfo">
                    <p className="detailstext">Trustscore:</p>
                    <p> Users Trust Score</p>
                </div>
            </div>
        </div>
    )
}
