import React, {useState, useEffect} from "react"
import "./App.css"
import ContributionGraph from "./Components/Timeline/ContributionGraph"
import axios from "axios"

function App() {
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
      <ContributionGraph contributionData={contributionData} />
    </div>
  )
}

export default App
