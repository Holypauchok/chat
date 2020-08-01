import React from 'react'
import Head from './head'
import SideBar from './side-bar/side-bar'
import ChatField from './chat-field/main'


const Home = () => {

  return (
    <div>
      <Head title="Hello" />
      <div className="h-screen overflow-hidden flex items-center justify-center">
        <div className="w-full border shadow">
          <div className="flex">
            <SideBar/>
            <ChatField />
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
