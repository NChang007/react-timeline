import React from 'react'
import './timeline.css'

const TimeLine = () => {
  return (
    <div className='timeline'>
        <div className='timeline__inner'>
            <div className='inner-line'></div>
            <div className='event' data-direction="up">Launch Date</div>
            <div className='event' data-direction="up">Became President</div>
            <div className='event' data-direction="up">Lauched STENFEN</div>
        </div>
    </div>
  )
}
export default TimeLine