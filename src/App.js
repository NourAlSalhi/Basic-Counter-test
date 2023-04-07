import React from 'react'
import Counter from './components/Counter/Counter'

const App = () => {
  return (
    <div style={{ textAlign: 'center', fontWeight: '600' }}>
      <Counter start={10} />
      <p>learn react</p>
    </div>
  )
}

export default App