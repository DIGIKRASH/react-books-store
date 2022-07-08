import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const { books } = useSelector(({ books }) => books)

  return (
    <div>
{books}
    </div>
  )
}

export default App
