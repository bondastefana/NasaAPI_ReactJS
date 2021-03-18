import { useState } from 'react'

function DaySelector(props) {
  const { getDateInfo } = props

  const [date, setDate] = useState('')

  const handleSelectedDate = (event) => {
    setDate(event.target.value)
  }

  const submitDate = () => {
    getDateInfo(date)
  }

  return (
    <div>
      Select date:
      <input type="date" onChange={handleSelectedDate} />
      <button onClick={submitDate}>See picture</button>
    </div>
  )
}

export default DaySelector
