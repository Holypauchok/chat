import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNewChannel } from '../../redux/reducers/chat'

const NewChannel = () => {
  const dispatch = useDispatch()
  const [channel, setChannel] = useState()
  return (
    <div className="px-4 pb-4">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          value={channel}
          onChange={(e) => setChannel(e.target.value)}
          className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="channel name"
          aria-label="channel name"
        />
        <button
          onClick={() => {
            dispatch(createNewChannel(channel))
            setChannel('')
          }}
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
        >
          Create
        </button>
      </div>
    </div>
  )
}

NewChannel.propTypes = {}

export default NewChannel
