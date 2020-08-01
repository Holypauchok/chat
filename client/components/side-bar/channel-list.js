import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeActiveChannel } from '../../redux/reducers/chat'

const ChannelList = () => {
  const dispatch = useDispatch()
  const channelList = useSelector((s) => s.chat.channels)
  const activeChannel = useSelector((s) => s.chat.activeChannel)

  return (
    <div className="bg-teal-dark mb-6 py-1 text-white font-semi-bold ">
      {channelList.map((channel) => {
        return (
          <div
            key={channel.channelId}
            className={`py-1 ${channel.name === activeChannel ? 'bg-gray-900' : ''}`}
          >
            <button
            type='button'
              onClick={() => dispatch(changeActiveChannel(channel.name))}
              className="pr-1 text-grey-300 px-4 focus:outline-none"
            >
              #{channel.name}
            </button>{' '}
          </div>
        )
      })}
    </div>
  )
}

ChannelList.propTypes = {}

export default ChannelList
