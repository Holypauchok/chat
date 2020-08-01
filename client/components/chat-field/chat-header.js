import React from 'react'
import { useSelector } from 'react-redux'
import SubscribeButton from './subscribe-to-channel'
import UnsubscribeButton from './unsubscribe-to-channel'

const ChatHeader = () => {
  const activeChannel = useSelector((s) => s.chat.activeChannel)
  return (
    <div className="border-b flex px-6 py-2 items-center">
      <div className="flex flex-col">
        <h3 className="text-grey-darkest text-md mb-1 font-extrabold">#{activeChannel}</h3>
        <div className="text-grey font-thin text-sm">
          Chit-chattin&apos about ugly HTML and mixing of concerns.
        </div>
      </div>
      <div className="ml-auto hidden md:block">
        <div className="flex">
          <SubscribeButton />
          <UnsubscribeButton activeChannel={activeChannel} />
        </div>
      </div>
    </div>
  )
}

ChatHeader.propTypes = {}

export default ChatHeader
