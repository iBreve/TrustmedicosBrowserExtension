import React from 'react'
import './Trust.css'

export default function Trust() {
    return (
        <div className='Trust'>
            <div className="trustItems">
                <div className="trustTitle">Trust Score</div>
                <div className="trustActive"><span className='trustActivated'>A trust score</span></div>
                <div className="trustDate">Updated on 31/12/20</div>
                <div className="trustButton"><button className='trustbutton'>View Score</button></div>
            </div>
        </div>
    )
}
