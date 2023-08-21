import React from "react"
import "./Month.css"

const MonthNames = {
  1: "Апр.",
  2: "Май",
  3: "Июнь",
  4: "Июль",
  5: "Авг.",
  6: "Сент.",
  7: "Окт.",
  8: "Нояб.",
  9: "Дек.",
  10: "Янв.",
  11: "Февр.",
  12: "Март",
}

const Month = ({index}) => {
  return <div className='Month'>{MonthNames[index]}</div>
}

export default Month
