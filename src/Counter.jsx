import { useState } from 'react'

const Counter = ({ lastName, firstName, age = 36, children }) => {
      const [count, setCount] = useState(age)
      
      const ButtonAdd = () => {
            return <button onClick={() => setCount(count + 1)}>New Age</button>
      }
      const ButtonMinus = () => {
            return <button onClick={() => setCount(count - 1)}>Minus</button>
      }
      return (
            <div>
                  <h1>First Name: {firstName}</h1>
                  <h1>Last name: {lastName}</h1>
                  <h1>Age: {age}</h1>
                  <h1>New Age: {count}</h1>
                  <h1>{children}</h1>
                  <div>
                        <ButtonAdd />
                        <ButtonMinus />
                  </div>
            </div>
      )
}

export default Counter
