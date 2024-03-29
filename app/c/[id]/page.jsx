import ChatInput from '@/components/ChatInput'
import Chats from '@/components/Chats'
import React from 'react'

function page() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-2 p-5 overflow-hidden">
      <Chats />
      <ChatInput />
      <p className="text-xs text-white/50">ChatGPT can make mistakes. Consider checking important information.</p>
    </div>
  )
}

export default page