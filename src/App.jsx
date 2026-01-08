import { useState } from 'react'
import './App.css'

import Form from './components/form/form.jsx'

function App() {
  const [doLogin, setDoLogin] = useState(true)
  const [status, setStatus] = useState('');

  const checkCreds = async (usrId, usrPwd) => {
    setStatus('')
    let username = usrId
    let password = usrPwd
    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      })
      setDoLogin(!response.ok)
    } catch (err) {
      setStatus('server error')
    }
  }
  return (
    <>
      {doLogin && (
        <Form checkCreds={checkCreds}></Form>
      )}
      {!doLogin && (
        <header className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Default Page of Authenticated User
            </h1>
          </div>
        </header>
      )}
      {status && <p className='text-xl font-bold text-center text-gray-500 mb-8'>{status}</p>}
    </>
  )
}

export default App
