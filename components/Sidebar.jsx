"use client"
import React from 'react'
import NewChat from './NewChat'
import Profile from './Profile'
import { useFocus } from '@/context/FocusContext'
import { useSession } from 'next-auth/react'
import { collection, orderBy, query } from 'firebase/firestore'
import { db } from '@/firebase'
import { useCollection } from "react-firebase-hooks/firestore"
import ChatRow from './ChatRow'

function Sidebar() {

  const { data: session } = useSession();

  const { handleFocus } = useFocus();

  const [chats] = useCollection(session && query(
    collection(db, "users", session?.user?.email, "c"),
    orderBy("createdAt", "desc")
  ));

  return (
    <div className="flex flex-col justify-between w-full h-full p-3 bg-secondary">
      <div className="flex flex-col h-[90%] gap-5 overflow-y-auto scroll-p-24" onClick={() => handleFocus()}>
        {/* New Chat */}
        <NewChat />

        <div className="flex flex-col gap-1 p-1">
          {/* Mapping Chats */}
          {chats?.docs.map(chat => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {/* Profile */}
      <Profile />
    </div>
  )
}

export default Sidebar