const shortid = require('shortid')

const CREATE_CHANNEL = 'CREATE_CHANNEL'
// const SUBSCRIBE_TO_CHANNEL = 'SUBSCRIBE_TO_CHANNEL'
const UNSUBSCRIBE_TO_CHANNEL = 'UNSUBSCRIBE_TO_CHANNEL'
const CHANGE_ACTIVE_CHANNEL = 'CHANGE_ACTIVE_CHANNEL'
const SEND_MESSAGE = 'SEND_MESSAGE'

// const SET_ACTIVE_CHANNEL = 'SET_ACTIVE_CHANNEL'

const initialState = {
  users: [
    {
      userId: '01',
      name: 'Olivia Dunham',
      image: 'https://i.imgur.com/8Km9tLL.jpg',
      tag: '@Olivia'
    },
    {
      userId: '02',
      name: 'Adam Bishop',
      image: 'https://i.imgur.com/qACoKgY.jpg',
      tag: '@Adam'
    },
    {
      userId: '03',
      name: 'killgt',
      image: 'https://avatars2.githubusercontent.com/u/343407?s=460&v=4',
      tag: '@killgt'
    }
  ],
  channels: [
    {
      channelId: '1',
      name: 'general',
      users: ['01', '02', '03']
    }
  ],
  messages: {
    general: [
      {
        messageId: '001',
        user: 'killgt',
        text: 'The slack from the other side.',
        time: +new Date(),
        meta: {}
      },
      {
        messageId: '002',
        user: 'Olivia Dunham',
        text:
          'How are we supposed to control the marquee space without an utility for it? I propose this:',
        time: +new Date(),
        meta: {}
      },
      {
        messageId: '003',
        user: 'Adam Bishop',
        text:
          " the size of the generated CSS is creating a singularity in space/time, we must stop adding more utilities before it's too late!",
        time: +new Date(),
        meta: {}
      }
    ]
  },
  activeChannel: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_CHANNEL: {
      return {
        ...state,
        channels: [...state.channels, action.newChannel]
      }
    }
    case UNSUBSCRIBE_TO_CHANNEL: {
      return {
        ...state,
        channels: action.channels
      }
    }
    case CHANGE_ACTIVE_CHANNEL: {
      return { ...state, activeChannel: action.channel }
    }
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.activeChannel]:
            typeof state.messages[action.activeChannel] === 'undefined'
              ? [action.message]
              : [...state.messages[action.activeChannel], action.message]
        }
      }
    }
    default:
      return state
  }
}

export function createNewChannel(name) {
  const newChannel = {
    channelId: shortid.generate(),
    name,
    users: [],
    messages: []
  }
  return { type: CREATE_CHANNEL, newChannel }
}

// export function setActiveChannel(channel) {
//   return { type: SET_ACTIVE_CHANNEL, channel }
// }

export function unsubscribeToChannel(activeChannel) {
  return (dispatch, getState) => {
    const { user, channels } = getState().chat
    const thisChannel = channels.find((channel) => channel.name === activeChannel)
    thisChannel.users = thisChannel.users.filter((it) => it !== user.userId)
    console.log(channels)
    dispatch({ type: UNSUBSCRIBE_TO_CHANNEL, channels })
  }
}

export function changeActiveChannel(channel) {
  return { type: CHANGE_ACTIVE_CHANNEL, channel }
}

export function sendMessages(text) {
  return (dispatch, getState) => {
    const { activeChannel } = getState().chat
    const { email } = getState().auth.user
    const message = {
      messageId: shortid.generate(),
      user: email,
      text,
      time: +new Date(),
      meta: {}
    }
    dispatch({ type: SEND_MESSAGE, activeChannel, message })
  }
}
