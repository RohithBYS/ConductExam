import React from 'react'
import calendarImage from './images/calendar.png'

function Header() {
    const fromDate = '27 Nov 2022 - 10:00 AM'
    const toDate = '27 Nov 2022 - 12:00 PM'

  return (
    <>
        <div class="main-cont arrange-col arrange-end">
            <h2 class="main-head-text">Grand Test</h2>
            <div class="date-cont">
                <img width="25" height="25" src={calendarImage} alt='calendar'/>
                <h4 class="sub-head-text">{fromDate}  to   {toDate}</h4>
            </div>
        </div>
    </>
  )
}

export default Header