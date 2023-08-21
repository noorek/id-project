import React, {useState, useEffect} from "react"
import "./App.css"
import ContributionGraph from "./Components/Timeline/ContributionGraph"
import axios from "axios"
import Month from "./Components/Month/Month"
import Weekday from "./Components/Weekday/Weekday"

function App() {
  const months = Array.from(new Array(12))

  const [contributionData, setContributionData] = useState([])

  useEffect(() => {
    axios.get("https://dpg.gg/test/calendar.json").then((data) => {
      let arr = data.data
      const newData = Object.entries(arr).map(([date, count]) => ({
        date,
        count,
      }))
      setContributionData(newData)
    })
  }, [])

  return (
    <div className='App'>
      {months.map((_, index) => (
        <Month key={index} index={index} />
      ))}

      <ContributionGraph contributionData={contributionData} />
    </div>
  )
}

export default App
