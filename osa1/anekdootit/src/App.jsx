import { useState } from 'react'

const Header = ({ title}) => <h1>{title}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const MaxVoted = ({ index, maxpoints, anecdotes }) => {
  if (maxpoints > 0) {
    return(
      <div>
        <Header title={'Anecdote with most votes'} />
        <p>{anecdotes[index]}</p>
        <p>has {maxpoints} points</p>
      </div>
    )
  }
  }

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(Math.round(Math.random() * 7))
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [maxPoints, setMaxPoints] = useState(0)

  const handleNextClick = () => {
    setSelected(Math.round(Math.random() * 7))
  }

  const handleVoteClick = () => {
    const copy_points = [...points]
    copy_points[selected] += 1
    setPoints(copy_points)
    setMaxPoints(copy_points[indexOfMax(copy_points)])
  }

  const indexOfMax = arr => arr.indexOf(Math.max(...arr))

  return (
    <div>
      <Header title={'Anecdote of the day'} />
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} points</p>
      <p>
        <Button handleClick={handleVoteClick} text={'vote'}/>
        <Button handleClick={handleNextClick} text={'next anecdote'} />
      </p>
      
      
      <MaxVoted index={indexOfMax(points)} maxpoints={maxPoints} anecdotes={anecdotes} />

    </div>
  )
}

export default App