import React, { useState } from 'react'

const Button = ({handleClick, name}) => {
  return (
    <button onClick = {handleClick}>{name}</button>
  )
}

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0})

  //Sets the max value within the object to variable max
  //Object.keys(points) gets every KEY from the object as an array
  //.reduce will always return ONE value, iterating over each element in the array
  //.reduce() takes a callback function as a parameter ---> .reduce(callback, intial_value)
  // ? works as an if...else statement---> (if points[a] > points[b], then a, else b)
  const max = Object.keys(points).reduce((a, b) => points[a] > points[b] ? a : b);

  // Using standard function definition...
  // function getRandInt(min, max) {
  //   min = Math.ceil(min)
  //   max = Math.floor(max)

  //   return Math.floor(Math.random() * (max - min + 1) + min)
  // }

  //Arrow function implementation

  const getRandInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const handleClick = () => {

    const rand_num = getRandInt(0, 6)
    setSelected(rand_num)
  }

  const handleVote = () => {
    const copy = {...points}
    copy[selected] += 1  
    
    //copy is created using points, then setPoints alters the state and sets points = updated copy values
    setPoints({...copy})
  }

  return (
    <div>
      <Header text = "Anecdote of the day"/>
      {anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <div>
        <Button handleClick = {handleVote} name = "vote"/>
        <Button handleClick = {handleClick} name = "next anecdote"/>
      </div>
      <Header text = "Anecdote of the day"/>
      {anecdotes[max]}
    </div>
  )
}

export default App
