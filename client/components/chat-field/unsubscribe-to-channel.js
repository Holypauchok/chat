import React from 'react'
import { useDispatch } from 'react-redux'
import {  unsubscribeToChannel } from '../../redux/reducers/chat'

const UnsubscribeButton = ({ activeChannel }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <button type="button"
      onClick={() => {
        dispatch(unsubscribeToChannel(activeChannel))
      }}>unsubcribe</button>
    </div>
  )
}

UnsubscribeButton.propTypes = {}

export default UnsubscribeButton
