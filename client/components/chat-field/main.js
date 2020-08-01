import React from 'react'
import ChatHeader from './chat-header'
import MessageField from './message-field'
import InputField from './input-field'



const ChatField = () => {
  return (
    <div className="flex flex-col min-h-screen flex-grow ">
      <ChatHeader />
        <MessageField />
        <InputField />
    </div>
  )
}

ChatField.propTypes = {}

export default ChatField
