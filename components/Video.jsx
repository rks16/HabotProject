import React from 'react'
import '../components/css/Video.css'
import video from '../assets/video.svg'
import Yt from '../assets/ytLogo.svg'

const Video = () => {
  return (
    <div>
        <div className='cont d-flex align-items-center g-5'> 

        <div className="vid">
            <img src={video} alt="" id='YT' />
            <img src={Yt} alt="" id='ytLg'/>
        </div>

        <div className="tap">

        <div class="container">
            <ul class="nav nav-underline flex-column flex-sm-row">
                <li class="nav-item">
                <a className="nav-link active" href="Buyer">Buyer</a>
                </li>
                <li class="nav-item"> 
                <a class="nav-link" href="Buyer">Supplier</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="buyer">
                <ul className='my-3 ck'>
                    <li><img src="/src/assets/checked.png" alt="" />  Post your requirements.</li>
                    <li><img src="/src/assets/checked.png" alt="" />  Sit back for multiple suppliers to contact you.</li>
                    <li><img src="/src/assets/checked.png" alt="" />  Choose among the suppliers based on the ratings and reviews.</li>
                </ul>
                </div>
                <div class="tab-pane" id="supplier">
                </div>
            </div>
            </div>


        </div>
    </div>
    </div>
  )
}

export default Video;