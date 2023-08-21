import React from "react"

const ContributionGraph = ({contributionData}) => {
  const startDate = new Date("2022-05-31") // Начальная дата для графика
  const endDate = new Date("2023-08-31") // Конечная дата для графика

  function getColor(count) {
    if (count >= 20) {
      return "#196127" // Зеленый
    } else if (count >= 10) {
      return "#239a3b" // Зеленый
    } else if (count >= 5) {
      return "#7bc96f" // Светло-зеленый
    } else if (count >= 1) {
      return "#c6e48b" // Еще светлее зеленый
    } else {
      return "lightgray" // Серый для нулевых вкладов
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
          const count = contributionData[formattedDate] || 0

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
