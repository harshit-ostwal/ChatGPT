"use client";
import { useFocus } from '@/context/FocusContext';
import { LogOut, Settings } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

function Profile() {

  const { data: session } = useSession();
  const { isFocused, toggleFocus } = useFocus();

  return (
    <div className="relative">
      <button className="w-full px-3 py-2 rounded-lg group hover:bg-primary focus:bg-primary text-foreground" onClick={() => toggleFocus()}>
        <div className="flex items-center gap-2">
          <img src={session?.user?.image} alt={session?.user?.name} loading="lazy" className="w-8 h-8 rounded-full" />
          <h5 className="font-medium uppercase truncate">{session?.user?.name}</h5>
        </div>
      </button>

      <div className={`left-0 bottom-full mb-1 w-full p-3 flex flex-col transition-all grou gap-2 bg-card text-foreground rounded-lg ${isFocused ? 'absolute' : 'hidden'}`}>
        <button className="flex items-center w-full gap-3 p-3 rounded-lg hover:bg-secondary focus:bg-secondary">
          <Settings size={18} />
          Settings
        </button>
        <div className="border-t rounded-lg border-primary"></div>
        <button onClick={() => signOut()} className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary focus:bg-secondary">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Profile