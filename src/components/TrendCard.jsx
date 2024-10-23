import React from 'react';
import './trendCard.css';
import { SlCalender } from "react-icons/sl";

function TrendCard({slide}) {
  return (
    <div className='trend-card'>
      <img className='img-fluid' src={slide.previewImg} alt='' />
      <a href='#'>
       Add to calender <SlCalender />
      </a>
    </div>
  )
}

export default TrendCard;

// <ion-icon name="calender-outline"></ion-icon>