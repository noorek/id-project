import React from "react"

const DayNames = {
  1: "Пн",
  3: "Ср",
  5: "Пт",
}

const Weekday = (index) => {
  return <div className='weekday'>{DayNames[index]}</div>
}

export default Weekday
