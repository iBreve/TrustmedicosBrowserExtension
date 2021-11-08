import React from 'react'
import './Users.css'

export default function Users() {
    return (
        <div className='Users'>
            <div className="userItem">
                <div className="userTitle">Trustmedicos users</div>
                <div className="userActive"><span className='userActivated'>12,00 Users Active</span></div>
                <div className="userDate">Updated on 31/12/20</div>
                <div className="userButton"><button className='usebutton'>View Users</button></div>
            </div>
        </div>
    )
}
