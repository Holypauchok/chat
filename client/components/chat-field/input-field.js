import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendMessage} from '../../redux/reducers/chat'

const InputField = () => {
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()
  return (
    <div className="border-b flex px-6 py-2 items-center">
      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value)
        }}
        className="w-full mr-5 bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="text"
      />
      <button
        onClick={() => {
          dispatch(sendMessage(message))
          setMessage('')
        }}
        type="button"
        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded"
      >
        send
      </button>
    </div>
  )
}

InputField.propTypes = {}

export default InputField
