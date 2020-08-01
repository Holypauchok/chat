import React from 'react'
import { useSelector } from 'react-redux'

const UsersList = () => {
  const usersList = useSelector((s) => s.chat.users)
  const activeChannel = useSelector((s) => s.chat.activeChannel)
  const channelList = useSelector((s) => s.chat.channels)
  const usersFromActiveChannel = channelList.find((it) => it.name === activeChannel)

  let usersChannel

    if (typeof activeChannel !== 'undefined') {
      usersChannel = usersFromActiveChannel.users.reduce((acc, rec) => {
        return [...acc, usersList.find((it) => it.userId === rec)]
      }, [])
    }

  return (
    <div className="h-32">
      {typeof usersChannel !== 'undefined' ? (
        <div className="px-4 mb-3 font-sans">
          Users
          {usersChannel.map((user) => {
            return (
              <div key={user.userId} className="flex items-center mb-3 px-4">
                <span className="bg-green-400 rounded-full block w-2 h-2 mr-2" />
                <span className="text-purple-300">{user.name}</span>
              </div>
            )
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

UsersList.propTypes = {}

export default UsersList
