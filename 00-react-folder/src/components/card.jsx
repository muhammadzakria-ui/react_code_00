import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {

  
  return (
    <div className="card">
    <div className='top'>
      <div className='top-left'>
       <img src={props.brandLogo} alt="Company Logo" />
       </div>
       <div className="bookMark-icon">
        <p>save</p>
        <Bookmark size={20} />
       </div>
    </div>
    <div className='center'>
       <h3>{props.company}<span>{props.datePosted}</span></h3>
       <h3 className='job-title'>{props.post}</h3>
       <div className='job-status'>
        <p>{props.tag1}</p>
        <p>{props.tag2}</p>
       </div>
    </div>
    <div className='bottom'>
    <div className='bottom-left'>
        <h3>{props.pay}</h3>
        <p>{props.location}</p>
    </div>

        <button>Apply now</button>
    </div>
    </div>
  )
}

export default Card
