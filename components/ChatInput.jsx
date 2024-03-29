"use client";
import { ArrowUp } from 'lucide-react'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

function ChatInput({ chatId }) {

  const { data: session } = useSession();
  const [prompt, setPrompt] = useState("");

  return (
    <div className="w-1/2">
      <form className="flex items-center justify-center p-1 px-2 overflow-y-hidden duration-300 bg-transparent border rounded-lg hover:border-foreground focus-within:border-foreground border-card">
        <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Message ChatGPT..." disabled={!session} className="flex-1 p-3 bg-transparent outline-none" />
        <button className="p-1 text-black duration-300 rounded-lg disabled:bg-card bg-foreground" disabled={!prompt || !session}>
          <ArrowUp />
        </button>
      </form>
    </div>
  )
}

export default ChatInput