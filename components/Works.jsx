import React from 'react'
import '../components/css/Works.css'
import Group33 from '../assets/Group33.png'
import Group from '../assets/Group.png'
import Layer from '../assets/Layer.png'
import edit from '../assets/edit.png'
import vector from '../assets/qReq.png'
import GroupT from '../assets/GroupT.png'

const Works = () => {
  return (
    <div>
        <div className='working'>
            <h1>How it works?</h1>
            <p>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
        </div>

        <div className="gridss">
            <div className="gd">
                <img src={Group33} alt="icon" />
                <p>Select Your Role and Sign Up</p>
            </div>
            <div className="gd bgClass">
                <img src={Group} alt="icon" />
                <p>Buyers Post Your Requirements</p>
            </div>
            <div className="gd">
                <img src={Layer} alt="icon" />
                <p> Review, Select, and Contact the Best Suppliers</p>
            </div>
            <div className="gd bgClass">
                <img src={edit} alt="icon" />
                <p> Suppliers Complete your profile and get notified for opportunities</p>
            </div>
            <div className="gd">
                <img src={vector} alt="icon" />
                <p>Contact to Buyers and Share your Quote for the service</p>
            </div>
            <div className="gd bgClass">
                <img src={GroupT} alt="icon" />
                <p>Both the Parties can Connect and Make Business Leave a Feedback</p>
            </div>
        </div>




    </div>
  )
}

export default Works