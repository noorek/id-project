import React from "react"
import "./Info.css"

const Info = () => {
  return (
    <div className='info'>
      Меньше
      <div className='info-cells'>
        <div
          style={{backgroundColor: "#EDEDED"}}
          className='info-cell'
          data-tooltip='No contributions'></div>
        <div
          style={{backgroundColor: "#ACD5F2"}}
          className='info-cell'
          data-tooltip='1-9 contributions'></div>
        <div
          style={{backgroundColor: "#7FA8C9"}}
          className='info-cell'
          data-tooltip='10-19 contributions'></div>
        <div
          style={{backgroundColor: "#527BA0"}}
          className='info-cell'
          data-tooltip='20-29 contributions'></div>
        <div
          style={{backgroundColor: "#254E77"}}
          className='info-cell'
          data-tooltip='30+ contributions'></div>
      </div>
      Больше
    </div>
  )
}

export default Info
