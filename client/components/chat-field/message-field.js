import React from 'react'
import { useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import format from 'date-fns/format'


const MessageField = () => {
  const activeChannel = useSelector((s) => s.chat.activeChannel)
  const messages = useSelector((s) => s.chat.messages[activeChannel])
  return (
    <div className="border-b flex px-6 py-2 flex-grow flex-col">
      {(messages ||
        []).map((message) => {
          return (
            <div className="flex" key={message.messageId}>
              <div className="w-auto pr-4">
                [{format(new Date(message.time), 'MM/dd/yyyy H:m:s')}]
              </div>
              <div className="w-auto pr-4 font-semibold">{message.user}:</div>
              <div><ReactMarkdown source={message.text} /></div>
            </div>
          )
        })}
    </div>
  )
}

MessageField.propTypes = {}

export default MessageField
