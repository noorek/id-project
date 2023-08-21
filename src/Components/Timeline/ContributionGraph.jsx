import React from "react"
import "./ContributionGraph.css"

const ContributionGraph = ({contributionData}) => {
  const startDate = new Date("2022-08-30") // Начальная дата для графика
  const endDate = new Date("2023-08-21") // Конечная дата для графика

  function getColor(count) {
    if (count >= 30) {
      return "#254E77"
    } else if (count >= 20 && count <= 29) {
      return "#527BA0"
    } else if (count >= 10 && count <= 19) {
      return "#7FA8C9"
    } else if (count >= 1 && count <= 9) {
      return "#ACD5F2"
    } else {
      return "#EDEDED"
    }
  }

  return (
    <div className='graph-container'>
      {Array.from(
        {length: (endDate - startDate) / (24 * 60 * 60 * 1000) + 1},
        (_, index) => {
          const currentDate = new Date(startDate)
          currentDate.setDate(currentDate.getDate() + index)
          const formattedDate = currentDate.toISOString().split("T")[0]
          const contributionEntry = contributionData.find(
            (entry) => entry.date === formattedDate,
          )
          const count = contributionEntry ? contributionEntry.count : 0

          return (
            <div
              key={formattedDate}
              className='cell'
              style={{backgroundColor: getColor(count)}}></div>
          )
        },
      )}
    </div>
  )
}

export default ContributionGraph
