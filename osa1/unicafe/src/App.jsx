import { useState } from 'react'

const Header = ({ title}) => <h1>{title}</h1>

const StatisticsLine = props => <div>{props.text} {props.value} {props.suffix}</div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad, total, sum}) => {
  if (total === 0) {
    return <StatisticsLine text={'No feedback given'} />
  }
  return (
    <div>
      <StatisticsLine text={'good'} value ={good} />
      <StatisticsLine text={'neutral'} value ={neutral} />
      <StatisticsLine text={'bad'} value={bad} />
      <StatisticsLine text={'all'} value={total} />
      <StatisticsLine text={'average'} value={sum / total} />
      <StatisticsLine text={'positive'} value={ good / total * 100 } suffix={'%'} />
    </div>
  )
}

const StatisticsTable = ({ good, neutral, bad, total, sum}) => {
  if (total === 0) {
    return <StatisticsLine text={'No feedback given'} />
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{sum / total}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{good / total * 100} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [sum, setSum] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
    setSum(sum + 1)
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(good + neutral + updatedBad)
    setSum(sum - 1)
  }

  return (
    <div>
      <Header title={'give feedback'} />

      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />

      <Header title={'statistics'} />

      <StatisticsTable good={good} neutral={neutral} bad={bad} 
      total={total} sum={sum} />

    </div>
  )
}

export default App
