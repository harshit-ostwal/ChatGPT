"use client"
import { db } from '@/firebase';
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { MessageSquareMore, Trash2 } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';

function ChatRow({ id }) {

  const pathname = usePathname();
  const { data: session } = useSession();
  const router = useRouter();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(query(collection(db, "users", session?.user?.email, "c", id, "messages")));

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname]);

  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email, "c", id));
    router.replace("/");
  }

  return (
    <Link href={`/c/${id}`} className={`flex items-center justify-between p-3 duration-300 rounded-lg hover:bg-primary text-foreground ${active && "bg-card"}`}>
      <div className="flex items-center gap-3">
        <MessageSquareMore size={18} />
        <p className="text-sm truncate">{messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}</p>
      </div>
      <Trash2 onClick={removeChat} size={18} className="duration-200 hover:text-red-800" />
    </Link>
  )
}

export default ChatRow