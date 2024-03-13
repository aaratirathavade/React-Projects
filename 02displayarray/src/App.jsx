import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [customer, setCustomer] = useState(
    {
      name: 'ABC',
      age: '26',
      mobile: '9096499518',
      address: 'A 504, mumbai'
    }
  )

  const update = () => {
    setCustomer(prevCustomer => ({
      ...prevCustomer,
      name: 'PQR',
      age: '30',
      mobile: '7083266314'
    }));
  }

  return (
    <>
     <h1>Customer Details</h1>
     <p>Name: {customer.name}</p>
     <p>Age: {customer.age}</p>
     <p>Mobile: {customer.mobile}</p>
     <p>Address: {customer.address}</p>

     <button onClick={update}>Update Details</button>
    </>
  )
}

export default App
