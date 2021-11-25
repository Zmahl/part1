import React, { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, totalClicks, average, posRatio}) => {

    if (totalClicks === 0) {
      return (
        <div>
          No feedback given.
        </div>
      )
    }
    //tbody needed in table to use <tr> tag
    return (
      <div>
        <table>
        <tbody>
        <StatisticLine text = "good" value = {good}/>
        <StatisticLine text = "neutral" value = {neutral}/>
        <StatisticLine text = "bad" value = {bad}/>
        <StatisticLine text = "all" value = {totalClicks}/>
        <StatisticLine text = "average" value = {average}/>
        <StatisticLine text = "positive" value = {posRatio}/>
        </tbody>
        </table>
      </div>
    )
}

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const Button = ({handleClick, name}) => {
  return (
    <button onClick = {handleClick}>{name}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  // conversely could set each to it's own useState
  // e.g const[good, setGood] = useState(0), const[netural, setNeutral] = useState(0), const[bad, setBad] = useState(0)
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0, totalClicks: 0, totalValue: 0
  })

  const average = (clicks.totalValue/clicks.totalClicks).toFixed(2)

  const posRatio = ((clicks.good/clicks.totalClicks) * 100).toFixed(2)

  // Use the constant newClicks to create copy of "clicks" array
  // If used seprarely, function call would look like
  // const handleGoodClick = () => {setGood(good + 1)}
  const handleGoodClick = () => {
    setClicks({...clicks, good: clicks.good + 1, totalClicks: clicks.totalClicks + 1, totalValue: clicks.totalValue + 1})
  }

  const handleNeutralClick = () => {
    setClicks({...clicks, neutral: clicks.neutral + 1, totalClicks: clicks.totalClicks + 1})

  }

  const handleBadClick = () => {
    setClicks({...clicks, bad: clicks.bad + 1, totalClicks: clicks.totalClicks + 1, totalValue: clicks.totalValue - 1})
  }


  return (
    <div>
      <Header name = "give feedback"/>
      <Button handleClick = {handleGoodClick} name = "good"/>
      <Button handleClick = {handleNeutralClick} name = "neutral"/>
      <Button handleClick = {handleBadClick} name = "bad"/>
      <Header name = "statistics"/> 
      <Statistics good = {clicks.good} neutral = {clicks.neutral} bad = {clicks.bad} 
      totalClicks = {clicks.totalClicks} average = {average} posRatio = {posRatio}/>
    </div>
  )
}

export default App