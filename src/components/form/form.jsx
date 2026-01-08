import { useState } from 'react'

import Fieldset from './fieldset.jsx'

const Form = ({checkCreds}) => {
    const [usrId, setUsrId] = useState('')
    const [usrPwd, setUsrPwd] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        checkCreds(usrId, usrPwd)
    }

    return (
        <div className='mb-4'>
            <h2 className='text-3xl font-bold text-center text-gray-900 mb-8'>
                Login / Sign Up
            </h2>
            <div className='border-b border-gray-200 mb-6'></div>
            <form onSubmit={handleSubmit} className='max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md'>
                <Fieldset label='Username' value={usrId} onChange={(e) => setUsrId(e.target.value)} placeholder='You may enter your username here'></Fieldset>
                <Fieldset label='Password' type='password' value={usrPwd} onChange={(e) => setUsrPwd(e.target.value)} placeholder='You may enter your password here'></Fieldset>
                <div className="mb-4">
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form
